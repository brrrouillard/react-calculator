import React, { Component } from 'react'

import './_Button.css';

export class Button extends Component {

    setClass() {
        return this.props.buttonType
    }
  render() {
    return (
      <div 
      className={this.props.buttonType + " button"}
      onClick={() => this.props.handleButtonClick(this.props.value)}>
        <span>{ this.props.value }</span>
      </div>
    )
  }
}

export default Button
