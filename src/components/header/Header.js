import React, { Component } from "react";

import './_Header.css';

export class Header extends Component {
  render() {
    return (
      <header>
        <h1 className="title">Calculator</h1>
      </header>
    );
  }
}

export default Header;
