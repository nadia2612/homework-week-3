import React, { Component } from "react";
import Quote from "./Quote";
import Search from "./Search";
import AddQuote from "./AddQuote";

export default class QuoteSearcher extends Component {
  state = {
    quotes: [],
    fetching: false
  };

  search = searchText => {
    this.setState({ fetching: true });
    fetch(
      `https://quote-garden.herokuapp.com/quotes/search/${searchText.toLowerCase()}`
    )
      .then(res => res.json())
      .then(data => {
        const quotes = data.results
          .reduce(
            (acc, current) => {
              if (!acc.index[current.quoteText]) {
                return {
                  index: { ...acc.index, [current.quoteText]: true },
                  results: [...acc.results, current]
                };
              }
              return acc;
            },
            { index: {}, results: [] }
          )
          .results.map(quote => ({
            ...quote,
            liked: undefined
          }));
        this.updateQuotes(quotes);
      })
      .catch(console.error);
  };

  // componentDidMount() {
  //   this.search("tree");
  // }

  updateQuotes(quotes) {
    this.setState({
      quotes: quotes,
      fetching: false
    });
    if (quotes.length === 0) {
      alert("No quotes for your request");
    }
  }

  setLiked = (id, liked) => {
    this.updateQuotes(
      this.state.quotes.map(quote =>
        quote._id === id ? { ...quote, liked } : quote
      )
    );
  };

  addQuote = quoteText => {
    const quote = {
      _id: Math.round(Math.random() * 100000),
      quoteText,
      quoteAuthor: "Me"
    };
    this.setState({
      quotes: [...this.state.quotes, quote]
    });
  };

  render() {
    const likesCounter = this.state.quotes.reduce(
      (acc, cur) => {
        if (cur.liked === true) {
          return { ...acc, likes: acc.likes + 1 };
        } else if (cur.liked === false) {
          return { ...acc, dislikes: acc.dislikes + 1 };
        }
        return acc;
      },
      { likes: 0, dislikes: 0 }
    );

    // console.log(likesCounter);

    return (
      <div className="QuoteSearcher">
        <p>Number of quotes:{this.state.quotes.length}</p>
        <Search searcher={this.search} />
        {this.state.fetching ? (
          <p> Loading...</p>
        ) : (
          [
            <h4>
              Liked: {likesCounter.likes} / Disliked: {likesCounter.dislikes}
            </h4>,
            this.state.quotes.map((quote, index) => (
              <Quote
                key={index}
                id={quote._id}
                text={quote.quoteText}
                author={quote.quoteAuthor}
                liked={quote.liked}
                setLiked={this.setLiked}
              />
            ))
          ]
        )}
        <AddQuote addQuote={this.addQuote} />
      </div>
    );
  }
}
