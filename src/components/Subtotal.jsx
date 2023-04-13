import React from "react";
import Rupee from "./Rupee";
import "./Subtotal.css";
import { useStateValue } from "../StateProvider";

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <>
      <div className="subtotal">
        <p>
          Subtotal ({basket.length} items):
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
