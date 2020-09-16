import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import UserCard from './UserCard'

export default function UserList() {
    const [users, setUsers] = useState([])
    useEffect(() => {
        const fetchUsers=() =>
        {
            Axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then((res)=>{
                setUsers(res.data)
            })
            .catch((err)=>{console.log(err)})
        }
        fetchUsers()
    }, [])
    return (
        <div className="list">
            {users.map((user)=> (
                <UserCard user= {user}/>
            ))}

            
        </div>
    )
}
