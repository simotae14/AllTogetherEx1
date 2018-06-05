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
            exists: false
        }
    }
    static propTypes = {
        onCreateUser: PropTypes.func.isRequired,
        users: PropTypes.array.isRequired
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
        // check present
        if (this.props.users.some( user => user.username.toLowerCase() === event.target.value)) {
            this.setState({
                exists: true
            })
        } else {
            this.setState({
                exists: false
            })
        }
    }
	handleSubmit = (event) => {
    	event.preventDefault();
      	// serialize the form inputs
    	const values = serializeForm(event.target, {
        	hash: true
        });
        values.gamesPlayed = 0;
        if(this.props.onCreateUser && !this.state.exists) {
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
                <div className={"error-message " + (this.state.exists ? 'show' : '')}>This user is duplicated. Try again!</div>
                <button disabled={this.state.username === '' || this.state.lastName === '' || this.state.firstName === '' || this.state.exists}>Add</button>
            </form>
        );
    }
}

export default AddUser;