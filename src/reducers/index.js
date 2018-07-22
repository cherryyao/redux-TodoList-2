export default (state={
    status:"all",
    todos:[
        {
            id: 'a',
            content: 'waiting for finish eventa',
            iscomplete: false
          }, {
            id: 'b',
            content: 'eventb',
            iscomplete: true
          }
    ]
},action)=>{
    console.log(state)
    switch(action.type){
        case 'ADD_TODO':{
            let newState = [...state]
            newState.todos = action.todos
            return newState
        }
        default:
        return state
    }
}