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
    this.setState({status: 'write'});
  }

  updateItem(e, id, content) {
    if (e.keyCode === 13) {
      this
        .props
        .updateItemContent(id, content);
      this.setState({status: 'read'});
    }
  }

  render() {
    let {todos} = this.props;
    console.log(this.state)
    console.log(todos)  
    return (
      <div>
        <ol>
          {todos.map(item =>(
            <li className={item.iscomplete? "checked": ""}>
              <input
                type="checkbox"
                className="done-todo"
                checked={item.iscomplete? "checked": ""}
                onClick={e => this.checkItem(item.id)}
                />
              
              <span onDoubleClick={e => this.changeToEditable(e)}>
                
                {this.state.status === 'read'
                  ? (item.content)
                  : (<input
                    autoFocus
                    className="edit-input"
                    defaultValue={item.content}
                    onKeyUp={e => this.updateItem(e, item.id, e.currentTarget.value)}/>)}
              </span>
            </li>
          ))}
          </ol>
        </div>

      

    )
  }
}
