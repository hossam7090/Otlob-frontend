import React, { useContext } from 'react';
import './ProductDisplay.css';
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png';
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {

    const {product} = props;
    const {addToCart} = useContext(ShopContext);
  return (
        <div className='productdisplay'>
          <div className="productdisplay-left">
            
            <div className="productdisplay-img">
                <img className='productdisplay-main-img' src={product.image} alt="" />
            </div>
          </div>
          <div className="productdisplay-right">
            <h1>{product.name}</h1>
            <div className="productdisplay-right-stars">
               <img src={star_icon} alt =""/>
               <img src={star_icon} alt =""/>
               <img src={star_icon} alt =""/>
               <img src={star_icon} alt =""/>
               <img src={star_dull_icon} alt =""/>
               <p>(122)</p>
            </div>
            <div className= "productdisplay-right-prices">
                <div className= "productdiplay-right-price-old">{product.old_price}</div>
                <div className="Productdisplay-right-price-new">${product.new_price}</div>
            </div>
            <div className="productdisplay-right-description">
            The radiance lives on in the {product.name} 1 ’07, the b-ball OG that puts a fresh spin on what you know best: durably stitched overlays, clean finishes and the perfect amount of flash to make you shine.            
            </div>
            
            <button onClick={() => {addToCart(product.id)}}>ADD TO CART</button>
            <p className='productdisplay-right-category'><span>Category :</span>shoes</p>
            <p className='productdisplay-right-category'><span>Tags :</span>Modern, Latest</p>
          </div>
        </div>
    )
}

export default ProductDisplay;