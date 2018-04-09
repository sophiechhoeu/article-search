import React, { Component } from 'react';
import './App.css';
import { FormGroup, FormControl, InputGroup, Glyphicon} from 'react-bootstrap';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      query:''
    }
  }

  search() {
    const BASE_URL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?';
    const API_KEY = 'e65c285a3650428aa955f98e68c8f641'
    const FETCH_URL = `${BASE_URL}q=${this.state.query}&api-key=${API_KEY}`
    console.log('FETCH_URL', FETCH_URL);
  }

  render(){
    return(
      <div className="App">
        <div className="App-title">Article Search</div>
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
          <div className="Profile">
            <div>Author</div>
          </div>
          <div className="Gallery">
            Gallery
          </div>
      </div>
    )
  }
}

export default App;
