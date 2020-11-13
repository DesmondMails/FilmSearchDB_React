import React,{Component} from 'react'
import './App.css';
import icon from './Images/FilmICO.png'
import MovieRow from "./MovieRow";
import $ from 'jquery'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rows: []
    }

    this.performSearch()
  }

  performSearch(searchTerm){
    console.log("Perform searching using API..")
    const urlString = 'https://api.themoviedb.org/3/search/movie?api_key=1922915490fb218b4b5e7cdd3a89b867&language=&query='+searchTerm
    $.ajax({
      url: urlString,
      success: (searchResults) => {
        console.log('succes')
        const results = searchResults.results
        console.log(searchResults)
        var movieRows = []

        results.forEach((movie) =>{
          movie.image_src = "https://image.tmdb.org/t/p/w600_and_h900_bestv2" + movie.poster_path
          console.log(movie.poster_path)
          const movieRow = <MovieRow key = {movie.id} movie={movie}/>
          movieRows.push(movieRow)
        })
        this.setState({
          rows: movieRows
        })
      },
      error: (xhr, status, err) => {
        console.error("Failed")
      }
    })
  }
  searchChangeHadler(event){
    const searchTerm = event.target.value
    this.performSearch(searchTerm)
  }

  render() {
    return (
        <div>

          <table className='titleBar'>
            <tbody>
            <tr>
              <td>
                <img alt='app icon' width="50" src={icon}/>
              </td>
              <td width="10"/>
              <td>
                <h2>MoviesDB Search</h2>
              </td>
            </tr>
            </tbody>
          </table>
          <input
              className="input-style"
              onChange={this.searchChangeHadler.bind(this)}
              placeholder='Enter the search term'/>

          {this.state.rows}

        </div>
    );
  }
}

export default App;
