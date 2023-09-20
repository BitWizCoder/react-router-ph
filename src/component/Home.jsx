import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="container mx-auto">
      <Header />
      Hello from home page!!!!
      <Outlet />
      <Footer />
    </div>
  );
};

export default Home;
