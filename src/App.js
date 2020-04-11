import React,{Component} from 'react';

import {CardList} from './component/card-list/card-list.component';

import {SearchBox} from './component/SearchBox/SearchBoc.component';

import './App.css';

class App extends Component
{
  constructor()
  {
    super();
    this.state = {
      monster:[],
      searchField:''
    };
    
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monster:users}));
  }


  handleChange = (e) =>{
    this.setState({searchField:e.target.value});
  }
  render()
  {
    const {monster,searchField } = this.state;
    const filteredMonster = monster.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase()));

    

    return(
      <div className="App">
      <h1>Monsters  Rolodex</h1>
        <SearchBox placeholder="Search Monsters here..." handleChange={this.handleChange}/>
        <CardList monster={filteredMonster}/>
      </div>  
    );
  }

}
export default App;
/*<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         {this.state.string}
        </p>
        <button onClick={()=>this.setState({string:"Hello World...!!"})}>Change Text</button>
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>*/