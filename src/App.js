import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import uuid from 'uuid';
import Notes from './components/Notes';




//console.log(notes);
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [
        {
          id: uuid.v4(),
          task: 'Learn React'
        },
        {
          id: uuid.v4(),
          task: 'Do laundry'
        }
      ]
    };
  }





  render() {
    const {notes} = this.state;
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

        </div>
        <p className="App-intro">
          <Notes notes={notes} />
          <button onClick={this.addNote}>+</button>
        </p>
      </div>
    );
  }

  addNote = () => {
    this.setState({
      notes: this.state.notes.concat([{
        id: uuid.v4(),
        task: 'New task'
      }])
    });
  }

}

export default App;
