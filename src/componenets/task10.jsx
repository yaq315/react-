import React from "react";

const studentes = ['student1', 'student2', 'student3','student4'];
class Task10 extends React.Component {
 
  render() {
    return (
      <div >
        <h1></h1>
        <ul>
          {studentes.map((name) => (
            <li style={{backgroundColor: "orange",color:"white",margin:"10px",textAlign:"center",width:"100px"}}>{name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Task10