import React, { useContext } from "react";
import { Camera } from "./Camera";

import { GlobalContext } from "../context/GlobalState";

export const CameraList = () => {
  let { cameras, selectedEquipment, selectCamera } = useContext(GlobalContext);
  const handleChange = e => {
    selectCamera(e.target.value);
  };
  return (
    <div className="equipmentColumn">
      <div className="title">Camera</div>
      <select onChange={handleChange} value={selectedEquipment.camera?.id}>
        {cameras.map(camera => (
          <Camera key={camera.id} camera={camera} />
        ))}
      </select>
    </div>
  );
};
