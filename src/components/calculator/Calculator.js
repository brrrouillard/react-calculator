import React, { Component } from 'react'

import './_Calculator.css';

import Output from './output/Output';

export class Calculator extends Component {
  render() {
    return (
      <main>
          <Output />
      </main>
    )
  }
}

export default Calculator