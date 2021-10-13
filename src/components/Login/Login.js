import React, { Component }  from "react";
import "./Login.css";
import  Grid  from "@material-ui/core/Grid";
import selfiePets from "../../imagess/selfiePets.jpg" ;
import FBlogo from "../../imagess/FBlogo.png";
import SignIN from "../Signin/SignIN";
import SignUp from "../Signup/SignUp";

class Login extends Component {
    constructor(props){
        super(props);
        this.state = { 
            isLogin: true
        }
    }

changeLogin=()=> {
    if(this.state.isLogin)
        this.setState({isLogin: false});
    else
        this.setState({isLogin: true});
}

    render() {
        return(
            <div>
                <Grid container>
                    <Grid item xs={3}>
                        izq
                    </Grid>

                    <Grid item xs={6}>
                        <div className="loginpage_main">
                            <img className="loginpage_logo" src= {selfiePets} width="100%vh"/>
                        </div>

                        <div>
                            <div className="loginpage_rightcomponent" >
                                <h1 className="loginpage_logo" >InstaPets</h1>
                                <div className="loginpage_signin" >


                                {

                                    this.state.isLogin ?  <SignIN/> :   <SignUp/>
                                }
                                    
                                   
                                  

                                    <div className="login_ordiv">
                                        <div className="login_dividor"></div>
                                        <div className="login_or">OR</div>
                                        <div className="login_dividor"></div>
                                    </div>

                                    <div className="login_fb"> <img src={FBlogo} width="30px" style={{ "marginRight":"5px" }} /> Log in with Facebook</div>
                                    <div className="login_forgt">Forgot password?</div>
                                </div>

                                <div className="loginpage_signuoption">
                                    { 
                                        this.state.isLogin ?

                                            <div className="loginpage_signin">
                                                Don't have an account? <span onClick={this.changeLogin} style={{ "fontWeight":"bold","color":"#0395f6" }}> Sign up </span>
                                            </div> :

                                            <div className="loginpage_signup">
                                                Have an account? Sign <span onClick={this.changeLogin} style={{ "fontWeight":"bold","color":"#0395f6" }}> Sign in </span>
                                            </div>

                                    }
                                </div>

                            </div>
                        </div>
                    </Grid>

                    <Grid item xs={3}>
                        der
                    </Grid>
                </Grid>
            </div>
        )
    }
}
export default Login;