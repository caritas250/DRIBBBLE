import Last from "../last/last"
import Middle from "../middle/middle"
import whitesandbeach from "../video/whitesandbeach.mp4";
import "./button.css"
const Button = () => {

    return(
        <form action="" className="form">    
        <div className="leaner">
        <button className="learn1">Discover</button>
        <button className="learn">Animation</button>
        <button className="learn">Branding</button>
        <button className="learn">Illustration</button>
        <button className="learn">Mobile</button>
        <button className="learn">Print</button>
        <button className="learn">Product Design</button>
        <button className="learn">Typograph</button>
        <button className="learn">Web Design</button>
        </div>
        <div className="middlebtn">
        <Middle/>
        </div>
        <div className="lastbtn">
        <Last/>
        </div>
        </form>
    )
}
export default Button