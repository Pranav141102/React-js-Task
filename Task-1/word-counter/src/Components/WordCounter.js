import React, { Component } from 'react';

class WordCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      wordCount: 0,
    };
  }

  handleTextChange = (event) => {
    const text = event.target.value;
    const words = text.trim().split(/\s+/);
    const wordCount = words.length;
    this.setState({
      text,
      wordCount,
    });
  };

  render() {
    return (
      <div className="WordCounter">
        <textarea
          rows="5"
          placeholder="Type your text here..."
          value={this.state.text}
          onChange={this.handleTextChange}
        ></textarea>
        <p>Word Count: {this.state.wordCount}</p>
      </div>
    );
  }
}

export default WordCounter;