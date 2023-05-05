import React from 'react';
import style from './Navbar.module.css'





class Navi extends React.Component{

    render(){
        return(
            <>
            <div className={style.nav}>
               <div className={style.title}>MOVIE APP</div>
                <div className={style.CartContainer}>
                    <img src='https://cdn-icons-png.flaticon.com/128/3514/3514491.png' alt='cart' className={style.img} />
                   <span className={style.CartCount} show={true}>2</span>
                </div>
            </div>
           
            </>
        )
    }
}



export default Navi;