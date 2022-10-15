
import logo from "../assets/logo.png"
// import {Link} from "react-router-dom"
import  "./Nav.scss"

const Nav  = () =>{
    return(
        <nav className="nav">
            <img src={logo} alt="logo"/>
        </nav>
    )
}

export default Nav;