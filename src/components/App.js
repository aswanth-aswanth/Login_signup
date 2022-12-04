import React from "react";
// import ReactDom from "react-dom";
import {BrowserRouter} from 'react-router-dom';
import {Routes,Route} from 'react-router-dom';
import Login from "./Login";

import Signup from "./Signup";

function App(){
    return (
        <BrowserRouter>
        <Routes>
            {/* <Route path="/" element={<Home />}/> */}
            <Route path="/" element={<Login />}/>
            <Route path="/Signup" element={<Signup />}/>
            
        </Routes>
        {/* <Login/> */}
        {/* <Signup/> */}
        </BrowserRouter>
    )
}
export default App;