import { Avatar } from "@material-ui/core";
import React, { Component } from "react";
import "./Suggestions.css"
import imageSrc from "../../imagess/user.png"

class Suggestions extends Component {
    constructor(props){
        super(props);
        this.state = { }
    }

    render() {
        return( 
            <div>
                <div className="suggestion_container">
                    <div className="suggestion_header">
                        <div>Suggestions </div>
                    </div>
                    <div className="suggestion_body">
                        <div>
                            <Avatar src={imageSrc} />
                            <div>Friend 1</div>
                        </div>
                       
                    </div>
                </div>
            </div>
        );
    }
}


export default Suggestions;