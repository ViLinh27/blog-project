//logout accepts propt(user)
//user can be written as props and inside is props.user in code
export default function Logout({user, setUser}){
    return(
        <form onSubmit={e => {e.preventDefault(); setUser('')}}>
            Logged in as: <b>{user}</b>
            <input type="submit" value="Logout"/>
        </form>
    )
}