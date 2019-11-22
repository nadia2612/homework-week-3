import React, { Component } from "react";

export default class Quote extends Component {
  state = {
    like: 0
  };
  like = () => {
    this.setState({
      like: 1
    });
  };
  disLike = () => {
    this.setState({
      like: -1
    });
  };

  getStyle = () => {
    if (this.state.like === 1) {
      return { "font-weight": "bold", color: "green" };
    } else if (this.state.like === -1) {
      return { "text-decoration": "line-through", color: "red" };
    } else {
      return {};
    }
  };

  render() {
    const { text, author } = this.props;

    return (
      <div className="Quote">
        <p style={this.getStyle()}>{text}</p>
        <p>
          By: {author}
          <button onClick={this.like}>:)</button>
          <button onClick={this.disLike}>:(</button>
        </p>
      </div>
    );
  }
}
