import React, { Component } from 'react';
import serializeForm from 'form-serialize';
import PropTypes from 'prop-types';

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
    static propTypes = {
        onCreateUser: PropTypes.func.isRequired
    };
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
      	if(this.props.onCreateUser) {
            this.props.onCreateUser(values);
        }
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
                <button disabled={this.state.username === '' || this.state.lastName === '' || this.state.firstName === ''}>Add</button>
            </form>
        );
    }
}

export default AddUser;