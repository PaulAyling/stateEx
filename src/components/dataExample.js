import React from 'react'

export default function DataExample(props) {

const myName = props.firstName;
const myPlace = props.state.place;
const myCons = props.consoleLog;
const myChangeName = props.changeName;

// const myConsoleLog = props.state.consoleLog()
// const consoleLog = (e) =>{
//   return console.log("just clicked")
// }

  return (
    <div>
      <div className="  lighten-2">
      <h1>This is my data Example component</h1>
 
  <h2>Passed props</h2>
{myName}
{myPlace}
<h2>some buttons Using functions passed as props</h2>
<section className="container-flex-column pd-med" >
  <div className="mg-large">    <a class="waves-effect waves-light btn" href="#" onClick={() => { myCons() }}>My Buttonfrom Home</a></div>
  <div className="mg-large">       <a class="waves-effect waves-light btn" href="#" onClick={() => { myChangeName() }}>Change Name</a></div>
</section>



      
      </div>
            

    </div>
  )
}
