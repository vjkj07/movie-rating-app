import {Component} from 'react';
import MovieCard from './MovieCard'



class MovieList extends Component{
    render(){
        const {movies,dec,add,handlefav,handlecart}=this.props;
        console.log(this.props)
        return(
        <>
        {movies.map((movie)=>
             <MovieCard 
              movies={movie}
              dec={dec}
              add={add}
              handlefav={handlefav}
              handlecart={handlecart}
              key={movie.id}/>
        )}
       
        </>
        )

    }
    
}

export default MovieList;