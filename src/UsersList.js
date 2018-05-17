import React, {Component} from 'react';
import User from './User';

class UsersList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showGamesPlayed: true
        }
    }
    render() {
        return (
            <ul>
                { this.props.users.map((user) => <User key={user.username} user={user} showGamesPlayed={this.state.showGamesPlayed} /> )}
            </ul>
        );
    }
}
export default UsersList;