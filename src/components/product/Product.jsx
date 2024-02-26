import "./product.css";
const images = require.context('../../img', false, /\.(png)$/);

const Product = ({imgNum, desc}) => {
  return (
    <div className="p">
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>
      <a>
        
       <img src={images('./C'+imgNum+'.png')} alt="" className="p-img" title={desc} />
      </a>
    </div>
  );
};

export default Product;
