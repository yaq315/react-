import React from "react";

class Task8 extends React.Component{
    render(){
    const  isSuccess = true
    return(
        <div>
            { isSuccess  ?(<h1> Success!</h1>):(<h1>Error</h1>) }
        </div>
    )
}
}

export default Task8