import React,{useEffect} from 'react'
import {useContext} from 'react'
import UserContext from '../context/user/userContext'
function UserList() {
    const {users,getUsers } = useContext(UserContext)
    useEffect(() => {
        getUsers();
    }, [])
    return (
        <div>
            User List
        </div>
    )
}

export default UserList
