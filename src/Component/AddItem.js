import React, {Component} from 'react';

export default class AddItem extends React.Component {
  constructor(){
    super();
    this.state={
      item:''
    }
    this.textValue = React.createRef();
  }
  addItem=()=>{
    console.log(this.textValue)
    const inputValue = this.textValue.current.value
    this.props.addHandler(inputValue)
    this.textValue.current.value=" "
  }

  render() {
    return (
      <div>
        <input className="input-text" type="text" name="ListItem" ref={this.textValue}/>
        <div id="button" onClick={this.addItem}>Add</div>
      </div>
    )
  }
}