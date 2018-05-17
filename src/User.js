import React from 'react';

const User = (props) => (
    <li>
        <span>{props.user.username}</span>
        {
            props.showGamesPlayed && <span> {props.user.gamesPlayed}</span>
        }
    </li>
);

export default User;