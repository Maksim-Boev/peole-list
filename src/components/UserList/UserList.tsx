import React, { useEffect } from "react";

import { useTypeSelector } from "../../hooks/useTypeSelector";
import { useAction } from "../../hooks/useAction";

const UserList = () => {
  const { users, error, loading } = useTypeSelector((state) => state.user);
  const { fetchUsers } = useAction();

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      {loading && <h1>Loading...</h1>}
      {error && <h1>{error}</h1>}
      {users.map((user, index) => (
        <div key={index.toString()}>{user.name}</div>
      ))}
    </div>
  );
};

export default UserList;
