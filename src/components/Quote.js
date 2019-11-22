import React, { Component } from "react";

export default class Quote extends Component {
  render() {
    const { text, author } = this.props;
    return (
      <div className="Quote">
        <p>{text}</p>
        <p> By: {author}
        {/* <button onClick="Like">:)</button>
        <button onClick="Like">:(</button> */}
        </p>
      </div>
    );
  }
}
