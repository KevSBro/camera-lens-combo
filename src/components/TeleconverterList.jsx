import React, { useContext } from "react";
import { Teleconverter } from "./Teleconverter";

import { GlobalContext } from "../context/GlobalState";

export const TeleconverterList = () => {
  const { teleconverters, selectedEquipment, selectTeleconverter } = useContext(
    GlobalContext
  );
  const handleChange = e => {
    selectTeleconverter(e.target.value);
  };
  return (
    <div className="equipmentColumn">
      <div className="title">Teleconverter</div>
      <select
        onChange={handleChange}
        disabled={!selectedEquipment.lens?.convertible}
        value={selectedEquipment.teleconverter?.id}
      >
        {teleconverters.map(teleconverter => (
          <Teleconverter key={teleconverter.id} teleconverter={teleconverter} />
        ))}
      </select>
    </div>
  );
};
