
import PropTypes from 'prop-types'  
export function Task({taskName,descripcion,dateTime,status}){    
    console.log('TASK COMPONENT ')
    
    return <div>
          <input
            type="checkbox"
            id={taskName}
            name="interest"
            value={taskName}
          />
          <label for={taskName}>{taskName}</label>
    </div>
}
//Add types to the Task props
Task.propTypes = {  
    taskName: PropTypes.string.isRequired,  
    descripcion:PropTypes.string.isRequired,
    dateTime:PropTypes.string.isRequired,
    status:PropTypes.bool.isRequired
}  
//Add default values to prop attributes
Task.defaultProps = {  
    taskName: 'Task',  
    descripcion:"Description",
    dateTime:'Without datetime',
    status:true
}  