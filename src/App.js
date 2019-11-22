import React from "react";
import "./App.css";
import QuoteSearcher from "./components/QuoteSearcher";
import Title from "./components/Title";
export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Title text="Quotes" />
        <QuoteSearcher />
      </div>
    );
  }
}
