import React, {Component} from 'react';

export default class ShowItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: "read"
    }

  }
  checkItem = (id) => {
    this.setState({status: 'read'});
    this
      .props
      .toggleActiveHandler(id);
  }

  changeToEditable() {
    this.setState({ status: 'write' });
}

  updateItem(e, id, content) {
    if (e.keyCode === 13) {
        this.props.updateItemContent(id, content);
        this.setState({ status: 'read' });
    }
}

  render() {
    let {todos} = this.props;
    console.log(todos.iscomplete)
    return (
      <li className={todos.iscomplete
        ? "checked"
        : ""}>
        <input
          type="checkbox"
          className="done-todo"
          checked={todos.iscomplete
          ? "checked"
          : ""}
          onClick={e => this.checkItem(todos.id)}
         />
         <span  onDoubleClick={e => this.changeToEditable(e)}> 
        {this.state.status === "read"
          ? (todos.content)
          : (<input
            autoFocus
            className="edit-input"
            defaultValue={todos.content}
            onKeyUp={e => this.updateItem(e, todos.id, e.currentTarget.value)}
            />)}
           </span>
      </li>

    )
  }
}
