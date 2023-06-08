export const Task = (props) => {
    return (<div>
          <p style={{textDecoration: props.completed === true ? "line-through" : "none"}} key={props.key}>{props.taskName}</p>
          <button onClick={() => props.completeTask(props.id)}>Completed</button>
          <button onClick={() => props.deleteTask(props.id)}>X</button>
          </div>);

}