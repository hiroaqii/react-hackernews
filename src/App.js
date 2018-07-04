import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const list = [
  {
    title: 'React',
    url: 'https://facebook.github.io/react/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://github.com/reactjs/redux',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  }
]

class App extends Component {

  constructor(prop){
    super(prop);

    this.state = {
      list: list,
    };

    this.onDismiss = this.onDismiss.bind(this);
  }

  onDismiss(id){
    const isNotId = (item) => item.objectID !== id;
    const updatedList = this.state.list.filter(isNotId);
    this.setState({list: updatedList})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          {this.state.list.map((item) => 
            <div key={item.objectID}>
              <span>
                <a href={item.url}>{item.title}</a>
              </span>
              <span>{item.author}</span>
              <span>{item.num_comments}</span>
              <span>{item.points}</span>
              <span>
                <button onClick={() => this.onDismiss(item.objectID)} type="button">Dissmiss</button>
              </span>
            </div>
          )}
        </p>
      </div>
    );
  }
}

export default App;
