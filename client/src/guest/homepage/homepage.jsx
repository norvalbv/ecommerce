import "./homepage.scss";
import NavBar from "../../components/navbar/navbar";
import Intro from "../../components/intro/intro";
import ShopItems from "../../components/shopitems/shopitems";
import Newsletter from "../../components/newsletter/newsletter";
import Footer from "../../components/footer/footer";
import Announcement from "../../components/announcement/announcement";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <>
      <Announcement />
      <NavBar />
      <Intro />
      <ShopItems />
      <div className="hp-categories">
        <div className="left">
          <h2>View T-Shirts</h2>
          <Link className="view-more" to="/products/tshirts">
            View More
          </Link>
        </div>
        <div className="right">
          <h2>View Hoodies</h2>
          <Link className="view-more" to="/products/hoodies">
            View More
          </Link>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </>
  );
}
