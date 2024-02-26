import "./productList.css";
import Product from "../product/Product";
import { products } from "../../data";

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title"><u>Vehicle Services</u></h1>
        <p className="pl-desc">
        Explore a selection of vehicle services I offer to help keep your car running smoothly. 
        Take a look at the options below and feel free to reach out if you require any of these 
        services or have other automotive maintenance needs.
        </p>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Product key={item.id} imgNum={item.id} desc={item.tooltip}/>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
