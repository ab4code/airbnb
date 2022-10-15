import banner from "../assets/banner.png"
import  "./Banner.css"

const Banner  = () =>{
    return(
        <nav className="banner">
            <img src={banner} alt="logo"/>
        </nav>
    )
}

export default Banner;