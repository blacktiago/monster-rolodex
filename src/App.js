//import logo from './logo.svg';
import { Component } from 'react';
import { Carlist } from './components/card-list/card-list.component';
import { SearchBox } from './components/rearch-box/search-box.component';
import './App.css';

class App extends Component{

  constructor(){
    super();
    this.state = {
      monsters: [],
      searchField: ""
    }
    //this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => this.setState({monsters: users}));
  }

  handleChange = e => {
    this.setState({searchField: e.target.value})
  }

  render(){
    const { monsters, searchField } = this.state;
    const filterdMonsters = monsters.filter( monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox plasceHolder="Search monsters"
        changeHandler={this.handleChange}></SearchBox>
        <Carlist monsters={filterdMonsters}>
        </Carlist>
      </div>
    );
  }
}

export default App;
