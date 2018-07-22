import {connect} from 'react-redux'
import AddItem from '../Component/AddItem'
import Todo from '../model/Todo'
import {addTodo} from '../action'
import todosAPI from "../api/TodoResourseAPI"


const mapStateToProps = (state , ownProps) =>{
    //console.log(state)
    return{
        
    }
}

const mapDispatchToProps = (dispatch , ownProps)=>{
    return{
        addHandler:(content) =>{
            const todo = new Todo(content);
            const todos = todosAPI.add(todo);
            dispatch(addTodo(todos));
        }

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AddItem)