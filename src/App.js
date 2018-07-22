import React, {Component} from 'react';
import './css/todo.css'
import AddItem from './Component/AddItem'
import ShowItem from './container/ShowItemContainer'
import FilterItem from './Component/FilterItem';

class App extends Component {
  constructor() {
    super();
    this.state = {
      status: "all",
      todos: [
        {
          id: '1',
          content: 'waiting for finish event1',
          iscomplete: false
        }, {
          id: '2',
          content: 'event2',
          iscomplete: true
        }
      ]
    }
  }

   filterByStatus(status){
    if(status==="all"){
      return this.state.todos;
    }else if (status === "active" ){
      return this.state.todos.filter(item=>item.iscomplete);
    }else{
      return this.state.todos.filter(item =>!item.iscomplete)
    }
}

generateUUID=()=> {
  /*jshint bitwise:false */
  var i,
      random;
  var uuid = '';

  for (i = 0; i < 32; i++) {
      random = Math.random() * 16 | 0;
      if (i === 8 || i === 12 || i === 16 || i === 20) {
          uuid += '-';
      }
      uuid += (i === 12
          ? 4
          : (i === 16
              ? (random & 3 | 8)
              : random)).toString(16);
  }
  return uuid;
}
deepCopy(array) {
  return JSON.parse(JSON.stringify(array));
}

addItem=(content)=>{
  console.log(this.state.todos)
  let todos = this.deepCopy(this.state.todos);
  todos.push({id:this.generateUUID(),content,iscomplete:false});
  this.setState({todos})

}

toggleActive=(id)=>{
  let todos = this.deepCopy(this.state.todos)
  let checkItem = todos.find(item=>item.id === id )
  checkItem.iscomplete = !checkItem.iscomplete
  this.setState({todos})
}

changeStatus=(status)=>{
  this.setState({status})
}

changeContent = (newId,newContent) => {
  console.log(newContent)
  let todos = this.deepCopy(this.state.todos);
  todos.find(item => item.id === newId).content = newContent; 
  this.setState({todos});
}


  render() {
    //console.log(this.state.todos)
    return (
      <div className="App">
        <div class="container">
          <div>
            <h2>Jquery To Do List</h2>
            <p>
              <em>Simple Todo List with adding and filter by diff status.</em>
            </p>
          </div>

          <AddItem addHandler={this.addItem}/>
          <ShowItem 
           toggleActiveHandler={this.toggleActive}
           updateItemContent={this.changeContent}
           />
          <FilterItem status={this.state.status} changeStatusHandler={this.changeStatus} />

        </div>
      </div>
    );
  }
}

export default App;
