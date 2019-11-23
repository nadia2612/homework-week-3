import React, { Component } from "react";

export default class AddQuote extends Component {
  state = {
    quoteText: ""
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addQuote(this.state.quoteText);
    this.setState({quoteText: ""})
  };

  handleChange = event => {
    this.setState({
      quoteText: event.target.value
    });
  };

  render() {
    return (
      <div className="add-quote">
        <form onSubmit={this.handleSubmit}>
          <label>
            Quote:
            <input
              type="text"
              onChange={this.handleChange}
              value={this.state.quoteText}
            />
          </label>
          <input type="submit" value="Add" />
        </form>
      </div>
    );
  }
}
