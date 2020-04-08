import React, { useContext } from "react";
import { Lens } from "./Lens";

import { GlobalContext } from "../context/GlobalState";

export const LensList = () => {
  const { lenses, selectedEquipment, selectLens } = useContext(GlobalContext);
  const handleChange = e => {
    selectLens(e.target.value);
  };
  return (
    <div className="equipmentColumn">
      <div className="title">Lens</div>
      <select onChange={handleChange} value={selectedEquipment.lens?.id}>
        {lenses.map(lens => (
          <Lens key={lens.id} lens={lens} />
        ))}
      </select>
    </div>
  );
};
