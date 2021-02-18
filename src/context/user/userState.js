import React, {useReducer} from 'react'
import UserReducer from './userReducer'
import UserContext from './userContext'
import axios from 'axios'
// User reducir es donde se definicar que funciones utilizaremos

const UserState=(props)=>{
    const initialState ={
        users:[],
        selectedUser:null
    }
    const [state, dispatch] = useReducer(UserReducer, initialState)

    const getUsers=async ()=>{
        const res = await axios.get('https://reqres.in/api/users');
        // console.log(res.data.data);
        dispatch({
            type:'GET_USERS',
            payload:res.data.data
        })
    }
    
    const getProfile =async (id)=>{
        const res = await axios.get(`https://reqres.in/api/users/${id}`);
        // console.log(res.data.data);
        dispatch({
            type:'GET_PROFILE',
            payload:res.data.data
        })
    }
    return (
        /* Todos los componentes que esten dentro de UserContext podran acceder al Estado de 
        la aplicacion */
        <UserContext.Provider value={{
            users: state.users,
            selectedUser: state.selectedUser,
            getUsers,
            getProfile
        }}>
            {props.children}
        </UserContext.Provider>
    );
}
export default UserState;