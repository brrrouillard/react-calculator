import React, { Component } from "react";

import "./_Output.css";

export class Output extends Component {
  render() {
    return (
      <div>
        <input className="output" type="text" name="" id="" value={this.props.output} />
      </div>
    );
  }
}

export default Output;
