import React, { Component } from 'react'

import './_Button.css';

export class Button extends Component {

    setClass() {
        return this.props.buttonType
    }
  render() {
    return (
      <div class={this.props.buttonType + " button"}>
        <span>{ this.props.value }</span>
      </div>
    )
  }
}

export default Button
