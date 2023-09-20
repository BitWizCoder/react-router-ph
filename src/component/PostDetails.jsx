import { useLoaderData, useNavigate } from "react-router-dom";

const PostDetails = () => {
  const post = useLoaderData();

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div>
      PostDetails {post.title}
      <button onClick={handleGoBack} className="btn btn-primary text-white">
        Go Back
      </button>
    </div>
  );
};

export default PostDetails;
