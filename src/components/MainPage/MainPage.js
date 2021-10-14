import React, { Component } from "react";
import "./MainPage.css"
import Post from "../Post/Post"
import unploadImage from "../../imagess/upload.png"

class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            postArray:[]
        }
    }

componentDidMount(){
    this.getPost();
}

    getPost=()=>{ //Api

        let data=[
            { 
            "postId":"123456",
            "userName":"pablo",
            "postImageURL":"https://irixlens.com/new/wp-content/uploads/2018/11/IRX_5473.jpg",
            "timeStamp":"123",
            "likes":"778"
            },
            { 
                "postId":"123456",
                "userName":"pablo",
                "postImageURL":"https://irixlens.com/new/wp-content/uploads/2018/11/IRX_5473.jpg",
                "timeStamp":"123",
                "likes":"778"
                },
        ];
        this.setState({postArray: data});

    }

    render() {
        return(
            <div>
                <div style={{"textAlign":"center","margin":"10px"}}>
                    <img className="mainpage_uploadicon" src={unploadImage} />
                </div>
            {
                this.state.postArray.map((item,index)=>(
                    <Post id={item.postId} userName={item.userName} postImage={item.postImageURL} likes={item.likes} />

                ))
            }
            </div>

        );
    }
}

export default MainPage;