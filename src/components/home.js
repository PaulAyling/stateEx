import React, { Component } from 'react'
import DataExample from './dataExample'

export default class home extends Component {
  state = {
    firstName:"Joy",
    place:"nirvana"
  }
changeName = (prop) =>{
  const newName="Karoline";
  this.setState({firstName:"Paul"})
  return console.log("New name is "+ newName + this.state.firstName)
}
changeName = this.changeName.bind(this);


consoleLog = (e) =>{
   return console.log("First butoon clicked")
}
consoleLog = this.consoleLog.bind(this);

  render() {
    return (
      <div>
        <h3>This is is an example of state being changed in a component</h3>
 
      <DataExample firstName={this.state.firstName} state={this.state} consoleLog={this.consoleLog} changeName={this.changeName}/>

      </div>
    )
  }
}
