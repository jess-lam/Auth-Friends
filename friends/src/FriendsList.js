import React from "react";
import { axiosWithAuth } from "./utils/axiosWithAuth";

class FriendsList extends React.Component {
    state= {
        friendsList: []
    };

    componentDidMount() {
        this.getData()
    }

    getData= () => {
        axiosWithAuth()
        .get("http://localhost:5000/api/friends")
        .then(res => {
            console.log(res);
            this.setState({
                friendsList: res.data
            })
        })
        .catch(err => console.error(err));
    }
    render() {
        return(
            <div className="friendsList">
                <h1>Friends List</h1>
                {this.state.friendsList.map((item, index) => (
                    <p key={index}>
                        Name: {item.name}
                        Age: {item.age}
                        Email: {item.email}
                    </p>
                ))}
            </div>
        )
    }
}

export default FriendsList;