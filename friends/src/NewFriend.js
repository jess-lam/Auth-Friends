import React from "react";
import { axiosWithAuth } from "./utils/axiosWithAuth";

class NewFriend extends React.Component {
    state= {
        newFriend: []
    };

    handleChange = e => {
        this.setState({
            ...this.state.newFriend,
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        axiosWithAuth()
        .post("/api/friends", this.state.newFriend)
        .then(res => {
            console.log(res);
            this.setState({newFriend: res.data})
        })
        .catch(err => {
            console.log("Something went wrong!", err)
        })
    }

    render() {
        return (
            <div className="addFriend">
                <h1>New Friends</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>Name</label>
                    <input
                    type="text"
                    name="name"
                    value={this.state.newFriend.name}
                    onChange={this.handleChange}
                    />

                    <label>Age</label>
                    <input
                    type="text"
                    name="age"
                    value={this.state.newFriend.age}
                    onChange={this.handleChange}
                    />

                    <label>Email</label>
                    <input
                    type="text"
                    name="email"
                    value={this.state.newFriend.email}
                    onChange={this.handleChange}
                    />
                    <button type="submit">Add</button>
                </form>
            </div>
        )
    }
}

export default NewFriend;