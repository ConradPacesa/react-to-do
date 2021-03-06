import React, { Component } from 'react';

class ToDo extends Component {
  render() {
    return (
      <li>
        <input type="Checkbox" checked={ this.props.isCompleted } onChange={ this.props.toggleComplete } />
        <span>{ this.props.description }</span>
      </li>
    );
  }
}

export default ToDo;