import React, { Component } from 'react';
import './App.css';
import { FormGroup, FormControl, InputGroup, Glyphicon} from 'react-bootstrap';
import Article from './Article';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      query:'',
      article: null
    }
  }

  search() {
    const BASE_URL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?';
    const API_KEY = 'e65c285a3650428aa955f98e68c8f641'
    const FETCH_URL = `${BASE_URL}q=${this.state.query}&api-key=${API_KEY}`
    console.log('FETCH_URL', FETCH_URL);
    fetch(FETCH_URL,{
      method: 'GET'
      })
      .then(response => response.json())
      .then(json => {
        const article = json.response.docs[0]
        console.log('article', article);
        this.setState({article});
      });
  }

  render(){
    return(
      <div className="App">
        <div className="App-title">New York Times Article Search</div>
        <img alt="logo" className="logo" src="http://www.eatdimestore.com/wp-content/uploads/2017/05/new-york-times-logo.jpg"></img>
          <FormGroup>
            <InputGroup>
              <FormControl
               type="text"
               placeholder="search for article"
               value={this.state.query}
               onChange={event => {this.setState({query:event.target.value})}}
               onKeyPress={event => {
                 if (event.key === 'Enter') {
                   this.search()
                 }
               }}
              />
              <InputGroup.Addon onClick={() => this.search()}>
                <Glyphicon glyph="search"></Glyphicon>
              </InputGroup.Addon>
            </InputGroup>

          </FormGroup>
          <Article
            article={this.state.article}
          />
      </div>
    )
  }
}

export default App;
