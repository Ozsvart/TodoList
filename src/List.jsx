import { useState, useEffect } from "react";
import { User } from "./User";

export function List() {
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://jsonplaceholder.typicode.com/users")
      // json file can be placed in the public folder, and fetch that way too
      .then((response) => response.json())
      .then(setUsers)
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <h1>User List</h1>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <ul>
          {users.map((user) => {
            return <User key={user.id} name={user.name} />;
          })}
        </ul>
      )}
    </>
  );
}
