import React,{useEffect} from 'react'
import {useContext} from 'react'
import UserContext from '../context/user/userContext'
function UserList() {
    const {users,getUsers, getProfile } = useContext(UserContext)
    useEffect(() => {
        getUsers();
    }, [])
    return (
        <div>
            <div className="list-group h-100">
                {
                    users.map(user=>
                        (
                            <a className="list-group-item list-group-item-action d-flex flex-row justify-content-start" onClick={()=>getProfile(user.id)} href="#!" key={user.id}>
                                <img src={user.avatar} className="img-fluid rounded-circle" width="70" alt="User Avatar"/>
                                <p>{`${user.first_name} ${user.last_name}`}</p></a>
                        )
                    )
                }
            </div>
        </div>
    )
}

export default UserList
