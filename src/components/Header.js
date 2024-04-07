import logoimg from '../../images/logo.png'

const Header = ()=>(
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
                <li>Login</li>
            </ul>
        </div>
    </div>

);

export default Header;
