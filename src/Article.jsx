import React, { Component} from 'react';
import './App.css';


class Article extends Component {
  render(){
    console.log('this.props', this.props);
    let article = {snippet: '', source: '', web_url: ''};
    if (this.props.article !== null) {
      article = this.props.article;
    }
    return (
      <div>
        <div>{article.web_url}</div>
        <div>{article.snippet}</div>
        <div>{article.source}</div>
      </div>
    )
  }
}

export default Article;
