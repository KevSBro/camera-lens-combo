import React from "react";

export const Lens = ({ lens }) => {
  return (
    <option value={lens.id}>
      {lens.name}
      {lens.convertible === true && "*"}
    </option>
  );
};
