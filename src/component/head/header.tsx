import "./header.css"
import image from "../../assets/image.png"


const Header = () => {
    return(

    <div className="header">
            <img src={image} alt="" className="image" />
            <h1>want to checkout dribble's 16 weeks product design course before enrolling?</h1>
            <h2> sign up to our free info session</h2>
            <h3>heppening this monday!</h3>
            <p>x</p>
        </div>
    
    
    )
}
export default Header