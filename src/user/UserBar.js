import {useState} from 'react'
import Login from './Login'//tried  to desctrure login here with {}, only works if compoenent object has properoties
import Logout from './Logout'
import Register from './Register'

//put int the code from the ppt accordingly

//if coniditon user then render logout
//esle its login and register

export default function UserBar({user,setUser}){
    //const user=''
    //const [user,setUser] = useState=('')
    if(user){
        return <Logout user={user} setUser={setUser} />
    }

    else{
        return(
            <>
                <Login setUser={setUser}/>
                <Register setUser={setUser}/>
            </>
        )
    }
}