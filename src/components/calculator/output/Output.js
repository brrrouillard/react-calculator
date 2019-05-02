import React, { Component } from "react";

import "./_Output.css";

export class Output extends Component {
  render() {
    return (
      <div className="output-container">
        <input
          className="output"
          type="text"
          value={this.props.output}
        />
      </div>
    );
  }
}

export default Output;
