/* function Login(){

}
export default Login; */

//we can export default or omit default and export with properties
import React, {useState} from 'react'

export default function Login({setUser}){
    const[username,setUsername] = useState('')

    function handleUsername (evt){setUsername(evt.target.value)}

    return(
        <form onSubmit={e => e.preventDefault()}>
            <label htmlFor="login-username">Username:</label>
            <input type="text" value={username} onChange={handleUsername} name="login-username" id="login-username"/>
            <label htmlFor="login-password">Password:</label>
            <input type="password" name="login-password" id="login-password" />
            <input type="submit" value="Login" disabled={username.length === 0}/>
        </form>
    );
}

/*
    note:

    In HTML, form elements such as <input>, <textarea>, and <select> typically maintain their own state and update it based on
user input. In React, mutable state is typically kept in the state property of components, and only updated with useState()/
setState().
We can combine the two by making the React state be the “single source of truth”. Then the React component that renders a
form also controls what happens in that form on subsequent user input. An input form element whose value is controlled by
React in this way is called a “controlled component”.

*/