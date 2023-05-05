import React from 'react'
import MovieList from "./MovieList"
import Navbar from "./Navbar"
import {movies} from "./moviedata"
// import Navi from "./Navi"

class App extends React.Component{
  constructor(){
    super();
    this.state={movies:movies,
        cartCount:0
    };
}

decstars=(movie)=>{
    const {movies}=this.state;
    const mid=movies.indexOf(movie);

    if(movies[mid].star===0)
    {
        return
    }
    movies[mid].star-=0.5;

      this.setState({
        movies:movies

    });
}

addstars=(movie)=>{
    const {movies}=this.state;
    const mid=movies.indexOf(movie);

    if(movies[mid].star===5)
    {
        return
    }
    movies[mid].star+=0.5;

      this.setState({
        movies:movies

    });
   
//    this.setState((prevState)=>{
//     return{
//         stars:prevState.stars+ 0.5
//     }
//    })
}
handlefavourite=(movie)=>{
    const {movies}=this.state;
    const mid=movies.indexOf(movie);

    if(movies[mid].fav===false){
    movies[mid].fav=true;}
    else{
    movies[mid].fav=false;}

    this.setState({
        movies:movies
    });

}

handlecart=(movie)=>{
   
        let {movies,cartCount}=this.state;
        const mid=movies.indexOf(movie);
        movies[mid].cart=!movies[mid].cart;
        
       if(movies[mid].cart)
       cartCount+=1;
       else
       cartCount-=1;

        this.setState({
            movies:movies,
            cartCount:cartCount
        });

    }



  render(){
    const {movies,cartCount}=this.state;
  return (
    <div className="App">
      <Navbar cartCount={cartCount}/>
      <MovieList movies={movies}
      dec={this.decstars}
      add={this.addstars}
      handlefav={this.handlefavourite}
      handlecart={this.handlecart}/>
    </div>
  );
  }
}

export default App;
