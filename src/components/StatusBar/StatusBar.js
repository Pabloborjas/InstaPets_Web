import { Avatar } from "@material-ui/core";
import React, { Component } from "react";
import "./StatusBar.css"
import statusimg from "../../imagess/user.png"
import unploadimage from "../../imagess/add.png"


class StatusBar extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            statusList:[]
        }
    }

    componentDidMount(){
        this.getData()
    }

    getData=() =>{
        let data =[
            {
                "username":"PabloB",
                "imageURL":"../../imagess/user.png"
        },
        {
                "username":"Bella",
                "imageURL":"../../imagess/user.png"
        },
        {
            "username":"Kirat",
            "imageURL":"../../imagess/user.png"
        },
        {
            "username":"Ojona",
            "imageURL":"../../imagess/user.png"
        },
        {
            "username":"Kirat",
            "imageURL":"../../imagess/user.png"
        },
        {
            "username":"Kirat",
            "imageURL":"../../imagess/user.png"
        },
        {
            "username":"Kirat",
            "imageURL":"../../imagess/user.png"
        }
        ]
        this.setState({statusList: data});
    }

    render() {
        return(
            <div>
                <div className="statusbar_container">
                <img src={unploadimage} className="statusbar_upload" width="50px" height="50px"/>
                    { 
                        this.state.statusList.map((item,index)=>(
                            <div className="status">
                                <Avatar className="statusbar_status" src={statusimg} />
                                <div className="statusbar_texts">{item.username}</div>
                            </div>
                        ))
                    }
                </div>
            </div>
        );
    }
}

export default StatusBar;