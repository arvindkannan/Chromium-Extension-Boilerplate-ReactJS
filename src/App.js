import React, { Component } from "react";
import { Route } from "react-router-dom";

//Components Load
import SamplePage from "./components/SamplePage";

//Css imports
import "./css/App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/*<Route exact path="/" render={() => <SamplePage />} />*/}
        {/*<Route exact path="/" component={SamplePage} />*/}
        {<SamplePage />}
      </div>
    );
  }
}

export default App;
