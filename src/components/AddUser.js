import React, { useState } from 'react';

const AddUser = () => {
    const [user, setUser] = useState({});
    const handleAddUser = (event) =>{
      event.preventDefault();
      console.log(user)
    }
    const handleBlur = event =>{
        const value = event.target.value;
        const field = event.target.name;
        console.log(value, field);
        const newUser = {...user};
        newUser[field] = value;
        setUser(newUser);

    }
    return (
        <div>
            <h1>Please add new user</h1>
            <form onSubmit={handleAddUser}>
                <input onBlur={handleBlur} type="text" name="name" id="" placeholder='name' required/>
                <br/>
                <input onBlur={handleBlur} type="text" name="address" id="" placeholder='address' required/>
                <br/>
                <input onBlur={handleBlur} type="email" name="email" id="" placeholder='email' required/>
                <br/>
                <button type="submit">Add User</button>
            </form>
        </div>
    );
};

export default AddUser;