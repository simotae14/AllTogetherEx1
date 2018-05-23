import React from 'react';
import PropTypes from 'prop-types';

const User = (props) => (
    <div>
        <span>{props.user.username}</span> played
        {
            props.showGamesPlayed ? <span> {props.user.gamesPlayed}</span> : <span> \*</span>
        } games.
    </div>
);

User.propTypes = {
    user: PropTypes.object.isRequired,
    showGamesPlayed: PropTypes.bool.isRequired
}

export default User;