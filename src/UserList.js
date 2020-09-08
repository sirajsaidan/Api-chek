import React,{useEffect,useState} from 'react'

import axios from 'axios'
 const UserList=()=>{
    const [exemple,setExemple]=useState([])
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
          .then(res => {
            const exemple = res.data;
            setExemple(exemple)})})
    
     return (
        <ul>
        { exemple.map(person => <li>{person.username}</li>)}
      </ul>
    )
  }

     
 
export default UserList

