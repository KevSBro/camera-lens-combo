import React from "react";

export const Teleconverter = ({ teleconverter }) => {
  return <option value={teleconverter.id}>{teleconverter.name}</option>;
};
