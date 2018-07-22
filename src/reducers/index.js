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
            return null;

        }
        default:
        return state
    }
}