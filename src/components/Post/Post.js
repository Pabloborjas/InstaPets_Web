import { Avatar } from "@material-ui/core";
import React, { Component } from "react";
import "./Post.css"
import postimage from "../../imagess/postdog.jpg"


class Post extends Component {
    constructor(props){
        super(props);
        this.state = { }
    }

    render() {
        return ( 
            <div className="post_container">

                {/* Header */}
                <div className="post_header">
                    <Avatar className="post_image" src="" />
                    <div className="post_username">Username</div>
                </div>


                {/* Image */}
                <div>
                    <img src={postimage}  width="615px"/>
                </div>


                {/* Analytics */}
                <div>
                    <div>
                        
                    </div>

                </div>


                {/* Coment Section */}
                <div></div>
            </div>
        );
    }
}

export default Post;