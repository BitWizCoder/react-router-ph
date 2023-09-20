import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <h2>Navbar</h2>
      <nav className="flex gap-5 text-green-600">
        <Link to="/">Home</Link>
        <Link to="/users">Users</Link>
        <Link to="/posts">Posts</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact Us</Link>
      </nav>
    </div>
  );
};

export default Header;
