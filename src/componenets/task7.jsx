import React from "react";

function task7 (){
    const isLoggedIn = true
    return(
        <div>
            {isLoggedIn  ?(<h1>welcomeback!</h1>):(<h1>login</h1>) }
        </div>
    )
}

export default task7