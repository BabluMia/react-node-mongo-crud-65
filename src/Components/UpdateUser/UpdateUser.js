import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateUser = () => {
    const {id} = useParams()
    const [ user , setUser] = useState({})
    useEffect(()=>{
        const url = `http://localhost:5000/user/${id}`
        fetch(url)
        .then(res=>res.json())
        .then(data=> setUser(data))
    },[])
    const handleUpdateUser = event =>{
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        console.log(name, email);
    
        const UpdateUser = {name,email}

        // send data to the server

    fetch(`http://localhost:5000/user/${id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(UpdateUser),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
          alert("user added successfully")
          event.target.reset()
        });
    }
    return (
        <div>
            <h3>Updating User: {user.name}</h3>
            <form action="" onSubmit={handleUpdateUser}>
        <input type="text" name="name" placeholder="User Name" required />{" "}
        <br />
        <input
          type="email"
          name="email"
          placeholder="User Email"
          required
        />{" "}
        <br />
        <input type="submit" value="Update User" />
      </form>
        </div>
    );
};

export default UpdateUser;