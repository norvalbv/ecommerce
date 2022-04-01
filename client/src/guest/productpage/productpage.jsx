import BreadcrumbsComponent from "../../components/breadcrumbs";
import NavBar from "../../components/navbar/navbar";
import ShopItems from "../../components/shopitems/shopitems";
import Footer from "../../components/footer/footer";
import "./productpage.scss";
import { useState } from "react";

export default function ProductPage() {
  const [color, setColor] = useState(null);
  const [size, setSize] = useState(null);

  return (
    <div className="product-page">
      <NavBar />
      <BreadcrumbsComponent />
      <h2 className="page-title">Categories</h2>
      <div className="filters-container">
        <div className="inner-filter">
          <p>Filter Products</p>
          <select
            name="color"
            id="color"
            onChange={(e) => setColor(e.target.value)}
          >
            <option value="black">Black</option>
            <option value="white">White</option>
            <option value="red">Red</option>
            <option value="blue">Blue</option>
            <option value="orange">Orange</option>
          </select>
          <select name="size" id="" onChange={(e) => setSize(e.target.value)}>
            <option value="small">S</option>
            <option value="medium">M</option>
            <option value="large">L</option>
            <option value="extralarge">XL</option>
          </select>
        </div>
        <div className="inner-filter">
          <p>Sort Products:</p>
          <select name="sort" id="sort">
            <option value="sort">Featured</option>
            <option value="sort">New In</option>
            <option value="sort">Best Selling</option>
          </select>
        </div>
      </div>
      <ShopItems color={color} size={size} />
      <Footer />
    </div>
  );
}
