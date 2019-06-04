import React from 'react';
export default function Hull({ 
  textfield, 
  updateRaft, 
  highlightText,
  textModifier,
  textUnModifier,
}){
  return(      
    <textarea 
      className="hull" 
      onChange={(e) => {e.preventDefault();e.persist();updateRaft(e)}} 
      // onChange={(e)=>console.log(e)}
      contentEditable="true" 
      suppressContentEditableWarning="true"
      defaultValue={textfield}
      onMouseUp={highlightText}
      onKeyDown={textModifier}
      onKeyUp={textUnModifier}
      >
      
    </textarea>
  )
}