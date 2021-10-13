import { Avatar } from "@material-ui/core";
import React, { Component } from "react";
import "./Post.css"
import postimage from "../../imagess/postdog.jpg"
import love from "../../imagess/loveicon.png"
import comment from "../../imagess/comment.png"
import share from "../../imagess/share.png"


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
                    <div style={{"marginLeft":"10px", "display":"flex"}}>
                       <img src={love} className="post_reactimage" />
                       <img src={comment} className="post_reactimage" /> 
                       <img src={share} className="post_reactimage" />  
                    </div>

                </div>


                {/* Coment Section */}
                <div></div>
            </div>
        );
    }
}

export default Post;