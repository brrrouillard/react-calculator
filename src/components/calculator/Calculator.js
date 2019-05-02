import React, { Component } from "react";

import "./_Calculator.css";

import Output from "./output/Output";
import Button from "./button/Button";

export class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttons: [
        {
          value: "ac",
          buttonType: "button-ac"
        },
        {
          value: "±",
          buttonType: "button-operations"
        },
        {
          value: "7",
          buttonType: "button-numbers"
        },
        {
          value: "8",
          buttonType: "button-numbers"
        },
        {
          value: "9",
          buttonType: "button-numbers"
        },
        {
          value: "X",
          buttonType: "button-operations"
        },
        {
          value: "4",
          buttonType: "button-numbers"
        },
        {
          value: "5",
          buttonType: "button-numbers"
        },
        {
          value: "6",
          buttonType: "button-numbers"
        },
        {
          value: "+",
          buttonType: "button-operations"
        },
        {
          value: "1",
          buttonType: "button-numbers"
        },
        {
          value: "2",
          buttonType: "button-numbers"
        },
        {
          value: "3",
          buttonType: "button-numbers"
        },
        {
          value: "-",
          buttonType: "button-operations"
        },
        {
          value: "0",
          buttonType: "button-numbers button-zero"
        },
        {
          value: ",",
          buttonType: "button-numbers button-coma"
        },
        {
          value: "=",
          buttonType: "button-operations button-equals"
        }
      ],
      output: "10"
    };
  }

  handleButtonClick = value => {
    const currentOutput = this.state.output;
    this.setState({ output: currentOutput + value });
  };
  
  render() {
    return (
      <main>
        <Output output={this.state.output} />
        {this.state.buttons.map((button, key) => (
          <Button
            value={button.value}
            buttonType={button.buttonType}
            handleButtonClick={this.handleButtonClick}
            key={key}
          />
        ))}
      </main>
    );
  }
}

export default Calculator;
