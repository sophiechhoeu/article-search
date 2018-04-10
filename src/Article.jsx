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
        <div className="article-link"><a href={article.web_url} target="_blank">{article.web_url}</a></div>
        <div>{article.snippet}</div>
        <div>{article.source}</div>
      </div>
    )
  }
}

export default Article;
