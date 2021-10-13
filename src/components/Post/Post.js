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
        this.state = { 
            commentList: []
        }
    }

    componentDidMount(){
        this.getComments();
    }

    getComments =()=>{ //Api 
        let data=[
            {
                "username":"hola",
                "commentId":"1234",
                "timeStamp":"123456",
                "description":"Comment 1"
            },
            {
                "username":"hola",
                "commentId":"1234",
                "timeStamp":"123456",
                "description":"Comment 2"
            },
        ];
        this.setState({commentList: data});
    }

    render() {
        return ( 
            <div className="post_container">

                {/* Header */}
                <div className="post_header">
                    <Avatar className="post_image" src={this.props.profileImage} />
                    <div className="post_username">{this.props.userName}</div>
                </div>


                {/* Image */}
                <div>
                    <img src={this.props.postImage}  width="615px"/>
                </div>


                {/* Analytics */}
                <div>
                    <div style={{"marginLeft":"10px", "display":"flex"}}>
                       <img src={love} className="post_reactimage" />
                       <img src={comment} className="post_reactimage" /> 
                       <img src={share} className="post_reactimage" />  
                    </div>
                    <div style={{"fontWeight":"bold","marginLeft":"20px","display":"flex"}}>
                        {this.props.likes} likes
                    </div>

                </div>


                {/* Coment Section */}
                <div>
                    {
                        this.state.commentList.map((item,index)=>(
                            <div className="post_comment">{item.username}: {item.description}</div>
                        ))
                    }
                    
                 
                    <input text="text" className="post_commentbox" placeholder="Add a comment" />

                </div>
            </div>
        );
    }
}

export default Post;