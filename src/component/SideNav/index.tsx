import { Link } from "react-router-dom"
import "./style.css"


function SideNav() {
    return (
        <nav>
            <div className="side-nav">

                <Link className="link1" to="/Dribbble">Dribbble</Link>
                <Link className="link" to="/inspiration">Inspiration</Link>
                <Link className="link" to="/Find Work">Find Work</Link>
                <Link className="link" to="/Learn Design">Learn Design</Link>
                <Link className="link" to="/Go pro">Go pro</Link>
                <Link className="link" to="/Design Files">Design Files</Link>
                <Link className="link" to="/Hire Designers">Hire Designers</Link>
            </div>
            <div className="left">
            {/* <span className="material-icons-outlined"> */}
               {/* search */}
              {/* </span> */}
                <Link className="link" to="/Sign in"> Sign in</Link>
                <Link className="btn" to="/Sign up"> Sign up</Link>
            </div>
        </nav>
    );
}
export default SideNav