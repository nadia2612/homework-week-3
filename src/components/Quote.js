import React, { Component } from "react";

export default class Quote extends Component {
  getStyle = () => {
    console.log(this.props.liked);
    if (this.props.liked === true) {
      return { fontWeight: "bold", color: "green" };
    } else if (this.props.liked === false) {
      return { textDecoration: "line-through", color: "red" };
    } else {
      return {};
    }
  };

  render() {
    const { text, author, id } = this.props;

    return (
      <div className="Quote">
        <p style={this.getStyle()}>{text}</p>
        <p>
          By: {author}
          <button onClick={() => this.props.setLiked(id, true)}>:)</button>
          <button onClick={() => this.props.setLiked(id, false)}>:(</button>
        </p>
      </div>
    );
  }
}
