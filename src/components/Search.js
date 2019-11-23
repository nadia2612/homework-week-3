import React, { Component } from "react";

export default class Search extends Component {
  state = { search: "" };

  handleChange = event => {
    this.setState({ search: event.target.value });
    console.log("====", this.state.search);
  };

  submitForm = event => {
    this.props.searcher(this.state.search);
    event.preventDefault();
  };

  render() {
    return (
      <div className="search-bar">
        <form onSubmit={this.submitForm}>
          <label>Search for a quote:</label>
          <input
            placeholder={"Quote"}
            onChange={this.handleChange}
            value={this.state.search}
          />
          <button type="submit">
            Search!
          </button>
        </form>
      </div>
    );
  }
}
