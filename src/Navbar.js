import React from 'react';
import styled from 'styled-components';

const Nav=styled.div` width:100%;
height:70px;
background-color:cadetblue;
display: flex;
justify-content: space-between;
background-image: linear-gradient(to bottom right, cadetblue, pink)`


const Title=styled.div`
font-size:30px;
padding:15px;
color:antiquewhite;
margin-left:15px;
padding-top:15x;
font-weight:600;
cursor:pointer;
&:hover{
    color:orange;
}
`

const CartContainer=styled.div`
position:relative;
cursor:pointer;
margin:20px;
`

const CartIcon=styled.img`
margin-right:30px;
height:48px;
padding:0 0 0 20px;
`

const CartCount=styled.span`
background-color:${(props)=>props.color};
border-radius:50%;
padding:4px 8px;
position:absolute;
right:10px;
top:-10px;
font-size:12px;
visibility:${(props)=>props.show?"visible":"hidden"};
`



class Navbar extends React.Component{

    render(){
        const {cartCount}=this.props;
        return(
            <>
            <Nav>
                <Title>MOVIE APP</Title>
                <CartContainer>
                    <CartIcon src='https://cdn-icons-png.flaticon.com/128/3514/3514491.png' alt='cart' />
                   <CartCount color='yellow' show={true}>{cartCount}</CartCount>
                </CartContainer>
            </Nav>
           
            </>
        )
    }
}


// const styles={
//     // nav:{width:"100%",
//     //     height:70,
//     //     // backgroundColor:"cadetblue",
//     //     display: "flex",
//     //     justifyContent:"space-between",
//     //     backgroundImage: "linear-gradient(to bottom right, cadetblue, pink)"
//     // },

//     // title:{
//     //     fontSize:25,
//     //     padding:15,
//     //     color:"antiquewhite",
//     //     marginLeft:15,
//     //     paddingTop:20,
//     //     fontWeight:600

//     // },

//     // cartContainer:{
//     //     position:"relative",
//     //     cursor:"pointer",
//     //     margin:20

//     // },

//     // cartIcon:{
//     //     marginRight:30,
//     //     height:48,
//     //     padding:"0 0 0 20",


//     // },

//     // cartCount:{
//     //     backgroundColor:"orange",
//     //     borderRdius:"50%",
//     //     padding:"4px 8px",
//     //     position:"absolute",
//     //     right:10,
//     //     top:-10,
//     //     fontSize:12

//     // }

// }


export default Navbar;