import { Link, useNavigate } from "react-router-dom";

const Post = ({ post }) => {
  const { id, title, body } = post;

  const navigate = useNavigate();

  const handleShowDetail = () => {
    navigate(`/post/${id}`)
  };

  return (
    <div className="text-gray-800 border border-amber-400 p-2 rounded-md">
      <h1 className="font-bold mb-2">{title}</h1>
      <p>{body}</p>
      <Link to={`/post/${id}`} className="btn btn-primary text-white">Details</Link>
      <button onClick={handleShowDetail} className="btn btn-primary text-white">shoe post</button>
    </div>
  );
};

export default Post;
