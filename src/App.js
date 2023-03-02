import React, { useState } from 'react';
import AddUser from './component/Users/AddUser';
import UsersList from './component/Users/UsersList';

function App() {
  const [usersList, setUsersList] = useState([])

  const addUserHandler = (userName, userAge) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, { id: Math.random().toString(), name: userName, age: userAge }];
    });
  };



  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList}></UsersList>
    </div>
  );
}

export default App;
