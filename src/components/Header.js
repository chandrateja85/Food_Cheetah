import { useState } from 'react';
import logoimg from '../../images/logo.png'

const Header = ()=>{
    const[loginButton,setLoginButton]=useState("Login");
    return(
    <div className="Header">
        <div className="LogoPart">
            <img className="logo" src={logoimg}></img>
        </div>
        <div className="NavList">
            <ul>
                
                <li>Home</li>
                <li>Cart</li>
                <li>About us</li>
                <li>Restaurant</li>
                <button className="login_button" onClick={()=>{
                    //console.log(loginButton);
                    // if clicked when the state variable is login then change it to log out and change vise versa
                    if(loginButton==="Login"){
                        setLoginButton("Logout");
                    } 
                    else{
                        setLoginButton("Login");
                    }
                }}>{loginButton}</button>
            </ul>
        </div>
    </div>
    );
}
export default Header;
