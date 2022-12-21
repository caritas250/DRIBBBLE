import { Dispatch, SetStateAction } from "react";
import { Link } from "react-router-dom";
import Header from "../component/head/header"
import SideNav from "../component/SideNav";
import "./Sign in.css"

const Login = () => {
    return <div>
         <Header/>
         <SideNav/>
        <form action="" className="formlog">

            <input placeholder="username" />
            <br />
            <input placeholder="password" />
            <Link className="pswd" to="/forgot password">forgot password?</Link>
            <button className="buto">Sign in</button>
            
            <div className="mmbr">
              &nbsp; &nbsp; Not a member?
            <Link to="/Sign up"className="create" >Sign up now</Link>
            </div>
        </form>
    </div>
}
export default Login;