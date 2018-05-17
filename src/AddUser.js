import React, { Component } from 'react';

class AddUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            username: '',
            gamePlayed: 0
        }
    }
    handleFirstName = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }
    handleLastName = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }
    handleUsername = (event) => {
        this.setState({
            username: event.target.value
        })
    }
    render() {
        return (
            <form>
                <h3>Create a new User</h3>
                <div>
                    <input
                        type="text"
                        placeholder="firstname"
                        value={this.state.firstName}
                        onChange={this.handleFirstName}
                    />
                </div>
                <div>
                   <input
                        type="text"
                        placeholder="lastname"
                        value={this.state.lastName}
                        onChange={this.handleLastName}
                    />
                </div>
                <div>
                   <input
                        type="text"
                        placeholder="username"
                        value={this.state.username}
                        onChange={this.handleUsername}
                    />
                </div>

            </form>
        );
    }
}

export default AddUser;