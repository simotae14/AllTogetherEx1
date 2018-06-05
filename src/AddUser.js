import React, { Component } from 'react';
import serializeForm from 'form-serialize';

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
	handleSubmit = (event) => {
    	event.preventDefault();
      	// serialize the form inputs
    	const values = serializeForm(event.target, {
        	hash: true
    	});
      	console.log('value', values);
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h3>Create a new User</h3>
                <div>
                    <input
                        type="text"
                        placeholder="firstname"
             			name="firstName"
                        value={this.state.firstName}
                        onChange={this.handleFirstName}
                    />
                </div>
                <div>
                   <input
                        type="text"
                        placeholder="lastname"
                        name="lastName"
                        value={this.state.lastName}
                        onChange={this.handleLastName}
                    />
                </div>
                <div>
                   <input
                        type="text"
                        placeholder="username"
                        name="username"
                        value={this.state.username}
                        onChange={this.handleUsername}
                    />
                </div>
                <button disabled={this.state.areEmpty}>Add</button>
            </form>
        );
    }
}

export default AddUser;