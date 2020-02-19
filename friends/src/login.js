import React from "react";
import 


class Login extends React.Component {
    state= {
        credentials: {
            username: "",
            password: ""
        }
    };

    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        });
    };

    login = e => {
        e.preventDefault();
        axiosWithAuth()
        .post("/api/login", this.state.credentials)
        .then(res => {
            localStorage.setItem("token", res.data.payload)
            this.props.history.push("/api/friends")
        })
        .catch(err => {
            localStorage.removeItem("token");
            console.log("invalid login", err);
        })
    }

    render() {
        return (
            <div>
                <form>
                    <label>Username</label>
                    <input
                        type="text"
                        name="username"
                        value={this.state.credentials.username}
                        onChange={this.handleChange}
                        />
                    <input
                        type="password"
                        name="password"
                        value={this.state.credentials.password}
                        onChange={this.handleChange}
                        />
                    <button>Log in</button>
                </form>
            </div>
        )
    }
}

export default Login