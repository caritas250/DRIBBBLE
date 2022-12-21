import { Link } from "react-router-dom";
import Header from "../component/head/header"
import SideNav from "../component/SideNav";
import "./signup.css"

const Signup = () => {
    return <div className="signup">
        <Header/>
         <SideNav/>
        <form action="" className="form" >
            <div className="class">
                <div className="input">
            <input type="text" placeholder="Full-name" />
            <input type="text" placeholder="User-name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="password" />
            </div>  
            <li>
                    creating an account means you're okay with our <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="#">terms of service</a>, 
                    &nbsp;<a href="#">privacy policy</a>, and our default <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="#">notification settings</a>.
                </li>     
                <button className="create1">Create acccount</button>
            <br /> 
                
            <div className="down">
            Already a member?
            <Link to="/Sign in" className="press">Sign in</Link>
            </div>
            </div>
            
            
        </form>
    </div>
}
export default Signup;