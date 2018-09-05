import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      ask:'',ans:''
    }
  }
  componentDidMount(){
    axios.get('https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_joke')
    .then((ambilData)=>{
      console.log(ambilData.data);
      this.setState({
        ask: ambilData.data.setup,
        ans: ambilData.data.punchline,
      })
    })
  }
  render() {
    return (
      <div className="card text-center center" style={{width:"300px"}}>
      
        <h3>{this.state.ask}</h3>
        <h5>{this.state.ans}</h5>
        <div>
          <button onClick={()=>{this.componentDidMount()}} className="btn btn-info">reload</button>
        </div>
        
      </div>
    );
  }
}

export default App;
