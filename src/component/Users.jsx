import { useLoaderData } from "react-router-dom";
import User from "./User";

const Users = () => {
  const users = useLoaderData();

  return (
    <div className="grid grid-cols-3 gap-7">
      {users.map((user, index) => (
        <User key={index} user={user} />
      ))}
    </div>
  );
};

export default Users;
