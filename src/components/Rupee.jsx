import React from "react";

function Rupee({ price }) {
  const rupeeIndian = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    useGrouping: true,
    maximumSignificantDigits: 3,
  });
  return <>{rupeeIndian.format(price)}</>;
}

export default Rupee;
