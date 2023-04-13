import React from "react";
import Rupee from "./Rupee";
import "./Subtotal.css";

function Subtotal() {
  return (
    <>
      <div className="subtotal">
        <p>
          Subtotal (0 items): {/* Add a check for basket */}
          <strong>
            <Rupee price="0" />
          </strong>
        </p>
        <small className="subtotal__gift">
          <input type="checkbox" />
          This contains a gift
        </small>
      </div>
    </>
  );
}

export default Subtotal;
