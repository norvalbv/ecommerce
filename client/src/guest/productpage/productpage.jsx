import BreadcrumbsComponent from "../../components/breadcrumbs";
import NavBar from "../../components/navbar/navbar";
import ItemDisplay from "../../components/itemdisplay/itemdisplay";
import Footer from "../../components/footer/footer";
import "./productpage.scss";
import { useState } from "react";

export default function ProductPage() {
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("Featured");

  const handleChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="product-page">
      <NavBar />
      <BreadcrumbsComponent />
      <h2 className="page-title">Products</h2>
      <div className="filters-container">
        <div className="inner-filter">
          <p>Filter Products</p>
          <select
            name="color"
            className="select-filter"
            onChange={handleChange}
          >
            <option hidden defaultValue="color">
              Color
            </option>
            <option value="black">Black</option>
            <option value="white">White</option>
          </select>
          <select name="size" className="select-filter">
            <option hidden defaultValue="size">
              Size
            </option>
            <option value="small">S</option>
            <option value="medium">M</option>
            <option value="large">L</option>
            <option value="extralarge">XL</option>
          </select>
        </div>
        <div className="inner-filter">
          <p>Sort Products:</p>
          <select
            name="sort"
            id="sort"
            onChange={(e) => {
              setSort(e.target.value);
            }}
          >
            <option value="Featured">Featured</option>
            <option value="New In">New In</option>
            <option value="Best Selling">Best Selling</option>
          </select>
        </div>
      </div>
      <ItemDisplay filters={filters} sort={sort} />
      <Footer />
    </div>
  );
}
