import React from "react";
import ReactDOM from "react-dom/client";
import PropTypes from 'prop-types';
import axios from "axios";
import Movie from "../components/Movie";
import "./Home.css";

class Home extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };

getMovie = async () => {
  const {
    data: {
      data: {movies},
    }
  } = await axios.get("https://yts.mx/api/v2/list_movies.json?sorty_by=rating")
  this.setState({movies, isLoading: false})
  console.log(movies)
};

componentDidMount () {
this.getMovie();
}


  render() {
    const { isLoading, movies} = this.state;
    return (
      <section className="container">
        {isLoading ? 
        <div className="loader">
          <span className="loader_text"> Loading... </span>
        </div>
         :
         movies.map(movie => {
      console.log(movie)
      return (
        <div className="movies">
        <Movie 
         key={movie.id}
         id={movie.id}
         year={movie.year}
         title={movie.title}
        summary={movie.summary} 
        poster={movie.medium_cover_image}
        genres={movie.genres}
         />
        </div>
      );
    })}</section>

  )}

}

export default Home;
