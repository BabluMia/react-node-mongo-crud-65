import React from "react";

const AddUser = () => {
  const handleAddUser = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    console.log(name, email);

    const user = {name,email}

    // send data to the server

    fetch("http://localhost:5000/user", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        alert("user added successfully")
        event.target.reset()
      });
  };
  return (
    <div>
      <h1>Please Add A user</h1>
      <form action="" onSubmit={handleAddUser}>
        <input type="text" name="name" placeholder="User Name" required />{" "}
        <br />
        <input
          type="email"
          name="email"
          placeholder="User Email"
          required
        />{" "}
        <br />
        <input type="submit" value="Add User" />
      </form>
    </div>
  );
};

export default AddUser;
