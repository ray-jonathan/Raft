import React from 'react';
import Hull from './Hull/Hull';
import Riggings from './Riggings/Riggings';
export default class Raft extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      textfield : '',
      highlightText: null,
      isTextModifierEngaged: false,
    };
  }
  render(){
    return(
      <div className="raft">
        <Riggings />
        <Hull 
          textfield={this.state.textfield} 
          updateRaft={this._updateTextfield} 
          highlightText={this._highlightText}
          textModifier={this._checkForModification}
          textUnModifier={this._clearModificationCommand}
        />
        <div id="preview" dangerouslySetInnerHTML={{ __html: this.state.textfield }} ></div>
      </div>
    )
  }
  _updateTextfield = ({target}) => {
    this.setState({textfield: target.value}
    // () => document.getElementById("preview")
    )
  }
  _highlightText = (e) => {
    // e.preventDefault();
    // const highlight = window.getSelection(e)
    // console.log(highlight);
    // console.log(highlight.toString());
    // console.log(highlight.anchorOffset);
    // console.log(highlight.focusOffset);
    // console.log(highlight.getRangeAt(0));
    // console.log(highlight.getRangeAt(0).getBoundingClientRect());
    // console.log(highlight.getRangeAt(0).getClientRects());
  }
  _checkForModification = (e) => {
    e.persist();
    if(e.keyCode === 91){
      this.setState({isTextModifierEngaged:true,})
    }
    if(e.keyCode === 66){
      this.setState({isBold:true,})
    }
    if(e.keyCode === 73){
      this.setState({isItalic:true,})
    }
  }
  _clearModificationCommand= (e) => {
    e.persist();
    if(e.keyCode === 91){
      this.setState({isTextModifierEngaged:false,})
    }
  }
}