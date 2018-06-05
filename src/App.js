import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import AddUser from './AddUser';
import UsersList from './UsersList';

/*
This exercise will help you put together and practice all of the concepts you've
learned thus far. It will also help you form a strong foundational knowledge of
React and prepare you for your first project.

The instructions for this project are located in the `instructions.md` file.
*/

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          firstName: 'Simone',
          lastName: 'Taeggi',
          username: 'startae14',
          gamesPlayed: 0
        }
      ]
    };
  }
  onCreateUser = (user) => {
    console.log('user', user);
  }
  render() {
    return (
      <div className="App">
        <Header logo={logo} />
        <AddUser onCreateUser={this.onCreateUser} />
        <UsersList users={this.state.users} />
      </div>
    );
  }
}

export default App;
