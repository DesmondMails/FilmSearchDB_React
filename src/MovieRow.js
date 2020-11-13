import React from 'react'
import {Card,Button} from "react-bootstrap";


class MovieRow extends React.Component{

    viewMovie(){
        const url = "https://www.themoviedb.org/movie/"+this.props.movie.id
        window.location.href = url
    }
    render() {
        return (

        <Card style ={{width:'18rem'}} className="w-18 mb-3 ml-3 mt-3 rounded-10" >
            <Card.Img variant="top"  src={this.props.movie.image_src} />
            <Card.Body>
                <Card.Title>{this.props.movie.title}</Card.Title>
                <Card.Text>
                    {this.props.movie.overview}
                </Card.Text>
                <Button variant="primary" onClick ={this.viewMovie.bind(this)}>View</Button>
            </Card.Body>
        </Card>


        )
    }
}

export default MovieRow