import React from 'react';
export default class Raft extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      field : ''
    };
  }
  render(){
    return(
      <div className="raft-wrapper" contentEditable="true" suppressContentEditableWarning="true">
        Hello World
      </div>
    )
  }
}