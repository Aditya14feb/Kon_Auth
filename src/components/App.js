import React, { Component } from 'react';
import './css/App.css';
import Student from './student';
import Author from './author';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      shown: true,
    };
    }

    toggle = () => {
      this.setState({ shown: !this.state.shown });

  }
  render() {
    var shown = {
      display: this.state.shown ? "block" : "none"

  };

  var hidden = {
      display: this.state.shown ? "none" : "block"
  }
    
        return (
              <div className="auth_container">
                <div className="form_container">
                      <ul id="buttons">
                        <li id="studentButton" onClick={this.toggle} ><a>Student </a></li>
                        <li id="authorButton" onClick={this.toggle} ><a> Author </a></li>
                      </ul>
              
                      <div className="users" style={shown}><Student /></div>
                      <div className="users" style={hidden}><Author /></div>
                </div>
            
             </div>
        
        )
  }
}

export default App;
