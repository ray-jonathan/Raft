import React from 'react';
import Hull from './Hull/Hull';
export default class Raft extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      field : ''
    };
  }
  render(){
    return(
      <div className="raft">
        <Hull />
      </div>
    )
  }
}