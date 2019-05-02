import React, { Component } from 'react'

import './_Calculator.css';

import Output from './output/Output';
import Button from './button/Button';

export class Calculator extends Component {
  render() {
    return (
      <main>
          <Output />
          <Button  value="ac" buttonType="button-ac" />
          <Button value="/" buttonType="button-operations" />

          <Button  value="7" buttonType="button-numbers" />
          <Button  value="8" buttonType="button-numbers" />
          <Button  value="9" buttonType="button-numbers" />
          <Button  value="X" buttonType="button-operations" />

          <Button  value="4" buttonType="button-numbers" />
          <Button  value="5" buttonType="button-numbers" />
          <Button  value="6" buttonType="button-numbers" />
          <Button  value="+" buttonType="button-operations" />

          <Button  value="1" buttonType="button-numbers" />
          <Button  value="2" buttonType="button-numbers" />
          <Button  value="3" buttonType="button-numbers" />
          <Button  value="-" buttonType="button-operations" />

          <Button  value="0" buttonType="button-numbers button-zero" />
          <Button  value="," buttonType="button-numbers button-coma" />
          <Button  value="=" buttonType="button-operations button-equals" />
      </main>
    )
  }
}

export default Calculator