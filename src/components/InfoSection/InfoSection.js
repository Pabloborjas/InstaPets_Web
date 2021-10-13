import { Avatar } from "@material-ui/core";
import React, { Component } from "react";
import "./InfoSection.css"
import imageSrc from "../../imagess/user.png"

class InfoSection extends Component {
    constructor(props){
        super(props);
        this.state = { }
    }

    render() {
        return( 
            <div className="info_container">
                <Avatar src={imageSrc} className="info_image"/>
                <div>
                    <div className="info_username">pabloB</div>
                    <div className="info_description">description</div>
                </div>
            </div>
        );
    }
}


export default InfoSection;