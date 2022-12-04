 import React from "react";  
 import {Link} from 'react-router-dom';
//  import Signup from "./Signup";
 const Login=()=>{
    // const [isShown, setIsShown] = useState(false);
    // console.log(isShown);
    // const handleClick = event => {
    // setIsShown(current => !current);
    // };
    return(
    <>
            <div>
           <form action="#" method="get" /*style={{display: isShown ? 'none' : 'block'}}*/ className="rectangle" id="rectone">
            <b>Login to your account</b>
            <input type="email" placeholder="Email" className="inptone"/>
            <input type="password" placeholder="Password" className="inpttwo"/>
            <button type="submit" className="btn btnone">Sign In</button>
            <Link to="/Signup">
            <button  /*onClick={handleClick}*/ className="btn btntwo">Sign up</button>
            </Link>
            </form>*
            </div>  
        {/* {isShown && <Signup />} */}
    </>
    )
}
export default Login;