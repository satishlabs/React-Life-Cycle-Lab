
import './App.css';
import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component{
  static displayName = "MyAppComponent"; 

  constructor(props){
    console.log("App - constructor()");
    super(props);
    this.state = {
      companyName:"SatishLabs",
    }
  }

  static getDerivedStateFromProps(){
    console.log("App - getDerivedStateFromProps()");
  }
  render(){
    console.log("App - render()");
    console.log("App - ",App.displayName);
    console.log("App - ",App.defaultProps);
    console.log("App - ",this.state);
    console.log("App - ",this.props);
    return(
      <div className="text-center">
        <h3>Welcome to SatishLabs !!!</h3>
      </div>
    )
  }
}

export default App;
