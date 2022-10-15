import banner from "../assets/banner.png"
import  "./Banner.css"

const Banner  = () =>{
    return(
        <nav className="banner">
            <img src={banner} alt="logo"/>
            <div className="banner-text">
                <p className="title">Online Experiences</p>
                <p className="info">
                    Join unique interactive activities led 
                    by <br/> one-of-a-kind hosts—all without leaving <br/> home.
                </p>
            </div>
        </nav>
    )
}

export default Banner;