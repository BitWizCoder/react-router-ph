import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./component/Home";
import ErorPage from "./component/ErrorPage";
import Abuot from "./component/Abuot";
import Contact from "./component/Contact";
import Users from "./component/Users";
import UserDetails from "./component/UserDetails";
import Posts from "./component/Posts";
import PostDetails from "./component/PostDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErorPage />,
    children: [
      {
        path: "/about",
        element: <Abuot />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/users",
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
        element: <Users />,
      },
      {
        path: "/user/:id",
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`),
        element: <UserDetails />,
      },
      {
        path: "/posts",
        loader: () => fetch(`https://jsonplaceholder.typicode.com/posts`),
        element: <Posts />,
      },
      {
        path: "/post/:id",
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`),
        element: <PostDetails />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
