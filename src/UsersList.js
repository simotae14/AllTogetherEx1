import React, {Component} from 'react';
import PropTypes from 'prop-types';
import User from './User';

class UsersList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showGamesPlayed: true
        }
    }
    static propTypes = {
        users: PropTypes.array.isRequired
    }
    handleShowGames = () => {
        this.setState((prevState) => ({
            showGamesPlayed: !prevState.showGamesPlayed
        }))
    }
    render() {
        return (
            <ul>
                { this.props.users.map((user) => <User key={user.username} user={user} showGamesPlayed={this.state.showGamesPlayed} /> )}
                <button onClick={this.handleShowGames}>{this.state.showGamesPlayed ? 'Hide the Number of Games Played' : 'Show the Number of Games Played'}</button>
            </ul>
        );
    }
}
export default UsersList;