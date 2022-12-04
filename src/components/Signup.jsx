import React from "react";
const Signup=()=>{
   return(
   <form action="#" method="post" className="recttwo">
       <big>Create an account</big>
       <p>Dont't have an account? it takes less than a minute. If you already have an account <a href="www.google.com">Login.</a></p>
       <input type="text" placeholder="Firstname" className="firstname"/>
       <input type="text" placeholder="Lastname" className="lastname"/>
       <input type="email" placeholder="Email address" className="emailaddress"/>
       <input type="password" placeholder="Password" className="signuppassword"/>
       <input type="password" placeholder="Re-enter password" className="signuppasswordtwo"/>
       <button type="submit" className="btn btnone">CREATE ACCOUNT</button>
   </form>
   )
}
export default Signup;