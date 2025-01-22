import React, { Component } from 'react';


const studentes = ['student1', 'student2', 'student3','student4'];
class Task9 extends React.Component {
 
  render() {
    return (
      <div >
        <h1></h1>
        <ul>
          {studentes.map((name) => (
            <li st>{name}</li>
          ))}
        </ul>
      </div>
    );
  }
}
export default Task9