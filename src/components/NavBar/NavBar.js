import React, { Component } from "react";
import "./NavBar.css"
import  Grid  from "@material-ui/core/Grid";
import logo from "../../imagess/logo.png"
import mensage from "../../imagess/mensage.png"
import paw from "../../imagess/paw.png"
import user from "../../imagess/user.png"
import like from "../../imagess/loveicon.png"
import Avatar  from "@material-ui/core/Avatar";


class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = { }
    }
    render() {
        return ( 
            <div>
                <div className="navbar_barContent">
                    <Grid container>
                        <Grid item xs={4}>
                            InstaPets <img className="navbar_logo" src={logo} width="40px"/>
                        </Grid>

                        <Grid item xs={4}>
                            <input text="text" className="navbar_searchBar" placeholder="Search"/>
                        </Grid>
                        
                        <Grid item xs={4}  style={{"display":"flex"}}>
                            <img className="navbar_img" src={paw} width="30px"/>
                            <img className="navbar_img" src={mensage} width="30px"/>
                            <img className="navbar_img" src={like} width="35px"/>
                            <Avatar src={user} className="navbar_img"  style={{"maxWidth":"30px","maxHeight":"30px"}} />
                        </Grid>

                    </Grid>
                </div>
            </div>
        );
    }
}

export default NavBar;