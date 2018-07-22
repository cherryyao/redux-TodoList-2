import {connect} from 'react-redux'
import ShowItem from '../Component/ShowItem'


const mapStateToProps = (state , ownProps) =>{
    console.log(state)
    return{
        todos:state.todos,
        status:state.status
    }
}

const mapDispatchToProps = (dispatch , ownProps)=>{
    return{
        

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ShowItem)