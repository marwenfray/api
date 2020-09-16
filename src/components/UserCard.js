import React from 'react'

export default function UserCard({user}) {
    return (
        <div className='card'>
          
             
                <h1>Name: {user.name}</h1>
                <h3>Adresse: {user.address.city}, {user.address.street}, {user.address.suite}</h3>
                <h3>Email: {user.email} </h3>
            
          
            
        </div>
    )
}
