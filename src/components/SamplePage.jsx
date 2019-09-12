import React, { Component } from "react";
import { Alert } from "react-bootstrap";
import logo from "../images/logo.svg";

class SamplePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null
    };
  }
  renderPage() {
    return (
      <div id="samplePage">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h4>Welcome to ReactJs Based Chromium Browser Extension</h4>
        </header>
      </div>
    );
  }

  render() {
    return this.renderPage();
  }
}

export default SamplePage;
