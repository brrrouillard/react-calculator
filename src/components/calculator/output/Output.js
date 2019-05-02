import React, { Component } from "react";

import "./_Output.css";

export class Output extends Component {
    constructor(props){
        super(props);
        this.state = {
            value: ""
        }
    }
  render() {
    return (
      <div>
        <input class="output" type="text" name="" id="" value={this.state.value} />
      </div>
    );
  }
}

export default Output;
