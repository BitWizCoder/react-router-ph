import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const User = ({ user }) => {
  const { id, name, email, phone } = user;

  return (
    <div className="border border-amber-400 rounded-md mb-5 p-3">
      <h2>
        <span className="font-bold text-gray-700">Name:</span> {name}
      </h2>
      <p>
        <span className="font-bold text-gray-700">Email:</span> {email}
      </p>
      <p>
        <span className="font-bold text-gray-700">Phone:</span> {phone}
      </p>
      <Link to={`/user/${id}`}>Show Details</Link>
    </div>
  );
};

User.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
  }),
};

export default User;
