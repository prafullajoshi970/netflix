import { Component }  from "react";
//'http://www.omdbapi.com/?i=tt3896198&apikey=9ffb785f'

class Netflix extends Component{
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      
    };

  }

  componentDidMount() {
    fetch(`http://www.omdbapi.com/?apikey=9ffb785f&s=all`)
      .then(response => response.json())
      .then(data => this.setState({ movies: data.Search }));
  }

  render() {
    const { movies } = this.state;
    return (
      <>
          <h1 style={{color:'red',fontFamily:'Cursive',textAlign:'center'}}>Netflix</h1>

          
       <div className="movie-list">
        
        {movies.map(movie => (
          <div className="movie-card" key={movie.imdbID}>
            <img src={movie.Poster} alt={movie.Title} />
            <h3>{movie.Title}</h3>
            <p>{movie.Year}</p>
            <p>{movie.Language}</p>
            <p>{movie.plot}</p>
          </div>
        ))}
      </div></>
     
    );
  }
}
export default Netflix;
