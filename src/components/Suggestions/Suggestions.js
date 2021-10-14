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
                        <div className="suggestion_friends">
                            <Avatar src={imageSrc} className="suggestion_image" />
                            <div className="suggestion_username" >Friend 1</div>
                        </div>
                    </div>

                    <div className="suggestion_body">
                        <div className="suggestion_friends">
                            <Avatar src={imageSrc} className="suggestion_image" />
                            <div className="suggestion_username" >test 1 1</div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}


export default Suggestions;