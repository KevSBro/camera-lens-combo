import React from "react";

export const Camera = ({ camera }) => {
  return <option value={camera.id}>{camera.name}</option>;
};
