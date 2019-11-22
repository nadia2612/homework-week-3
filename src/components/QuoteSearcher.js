import React, { Component } from "react";
import Quote from "./Quote";

export default class QuoteSearcher extends Component {
  state = {
    quotes: [],
    fetching: false
  };

  componentDidMount() {
    this.setState({ fetching: true });
    fetch("https://quote-garden.herokuapp.com/quotes/search/tree")
      .then(res => res.json())
      .then(data => {
        const quotes = data.results.map(quote => quote);
        this.updateQuotes(quotes);
        console.log(quotes);
      })
      .catch(console.error);
  }

  updateQuotes(quotes) {
    this.setState({
      quotes: quotes,
      fetching: false
    });
  }

  render() {
    return (
      <div className="QuoteSearcher">
        {this.state.fetching ? (
          <p> Loading...</p>
        ) : (
          this.state.quotes.map((quote,index) => (
            <Quote key={index} text={quote.quoteText} author={quote.quoteAuthor} />
          ))
        )}
      </div>
    );
  }
}
