import React, { Component } from "react";
import "../../components/Signin/SignIN"


class SignIN extends Component {
    constructor(props){
        super(props);
        this.state = { }
    }
    render() {
        return( 
            <div>
                <input className="loginpage_text" type="text" placeholder="Username or email"/>
                <input className="loginpage_text" type="password" placeholder="Password"/>
                <button className="login_button" >Log In</button>
            </div>
         );
    }
}

export default SignIN