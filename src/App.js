import React, { Component } from 'react';
import { CardList } from "./components/card-list/cardlist.component";
import { SearchBox } from "./components/search-box/search-box.component";
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: '',
    }
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => this.setState({ monsters: data }))
  }
  handleChange = (e) => this.setState({ searchField: e.target.value })
  render() {
    const {handleChange, state} = this;
    const { monsters, searchField } = state;
    const filteredMonsters = monsters.filter(({name}) => name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className="App">
        <h1>Monster Rolodex!</h1>
        <SearchBox placeholder='Search Monsters' handleChange={handleChange} />
        <CardList monsters={filteredMonsters} />
      </div>
    )
  }
}

export default App;
