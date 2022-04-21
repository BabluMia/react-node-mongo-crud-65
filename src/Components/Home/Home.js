import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/user')
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  const deleteUser =(id)=>{
    const confirm = window.confirm("Are Want to delete!!")
    if(confirm){
        console.log('Delete' , id);
        const url = `http://localhost:5000/user/${id}`
        fetch(url,{method:"DELETE"})
        .then(res => res.json())
        .then(data =>{
          // console.log(data)
          if(data.deletedCount > 0){
            const remaining = users.filter(user => user._id !== id);
            setUsers(remaining)
          }
        } )
    }
  }

  return (
    <div>
      <h2>Hi from Home</h2>
      <h5>{users.length}</h5>
      <ul>
         {
          users.map(user => <li key={user._id} style={{marginTop:'8px'}}>{user.name} :: {user.email} 

          <Link to={`/update/${user._id}`}>
            <button>Update</button>
          </Link>

          <button onClick={()=>deleteUser(user._id)}>X</button></li>)
      } 
      </ul>
      
    </div>
  );
};

export default Home;
