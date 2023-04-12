// import React from "react";
// import "./Product.css";

// function Product({ id, title, image, price, rating }) {
//   return (
//     <div className="product">
//       <div className="product__info">
//         <p>{title}</p>
//         <p className="product__price">
//           <small>$</small>
//           <strong>{price}</strong>
//         </p>
//         <div className="product__rating">
//           {Array(rating)
//             .fill()
//             .map((_, i) => (
//               <p>⭐</p>
//             ))}
//         </div>
//         <img className="product__image" src={image} alt="" />
//         <br />
//         <button className="add">Add to Basket</button>
//       </div>
//     </div>
//   );
// }

// export default Product;

import React from "react";
import { Link } from "react-router-dom";
import "./Product.css";

function Product({ id, title, image, price, rating, index }) {
  return (
    <>
      <section className="product">
        <Link to={`/product/${id}`}>
          <main className="product__details">
            <div className="product__info">
              <p>{title}</p>
              <div className="product__rating">
                {Array(rating)
                  .fill()
                  .map((_, i) => (
                    <span aria-label="rating" role="img" key={i}>
                      ⭐
                    </span>
                  ))}
              </div>
            </div>
            <img src={image} alt="Product" />
          </main>
        </Link>
        <center>
          <button className="btn">Add to Basket</button>
        </center>
      </section>
    </>
  );
}

export default Product;
