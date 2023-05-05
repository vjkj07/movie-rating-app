import React from 'react';
// import styles from './styles';


class MovieCard extends React.Component{

    render(){
        const {movies,dec,add,handlefav,handlecart}=this.props;
        const {title,plot,price,rating,star,fav,cart,poster}=this.props.movies;
    return(
        <div className='main'>
            <div className='movie-card'>
            <div className='left'>
                <img src={poster} alt='poster'/>
            </div>
            <div className='right'>
                <div className='title'>{title}</div>
                <div className='plot'>{plot}</div>
                <div className='price'>Rs {price}</div>

                <div className='footer'>
                    <div className='rating'>{rating}</div>
                    <div className='star-dis'>
                        <img alt='minus'
                         src='https://t4.ftcdn.net/jpg/03/57/73/73/240_F_357737313_RcaoFXtJfY4XvivCEWNAYZTg49SGjYE1.jpg'
                          className='str-btn' 
                          onClick={()=>{dec(movies)}}/>
                        
                        <img alt='star'
                         src='https://cdn-icons-png.flaticon.com/128/1828/1828884.png' className='stars'/>
                       
                        <img alt='plus'
                         src='https://t4.ftcdn.net/jpg/01/26/10/59/240_F_126105961_6vHCTRX2cPOnQTBvx9OSAwRUapYTEmYA.jpg' className='str-btn' 
                         onClick={()=>{add(movies)}}/>
                        
                        <span className="starCount">{star}</span>
                    </div>
                    {fav?<button className='unfavourite-btn'onClick={()=>{handlefav(movies)}}>Un-favourite</button>:<button className='favourite-btn'onClick={()=>{handlefav(movies)}}>Favourite</button>}
                    

                    {cart?<button className='remove-cart-btn' onClick={()=>{handlecart(movies)}}>Remove From Cart</button>: <button className='cart-btn' onClick={()=>{handlecart(movies)}} >Add to Cart</button>}
                    
                </div>
            </div>
            </div>
        </div>
    )
}
}

export default MovieCard;