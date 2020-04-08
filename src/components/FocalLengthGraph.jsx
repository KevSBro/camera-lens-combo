import React, { useContext } from "react";

import { GlobalContext } from "../context/GlobalState";

export const FocalLengthGraph = () => {
  const { selectedEquipment, cameras, lenses, teleconverters } = useContext(
    GlobalContext
  );
  const hasSelections = selectedEquipment.camera && selectedEquipment.lens;
  /*
  const minPossibleFocalLength =
    cameras.reduce((prev, current) =>
      prev.crop < current.crop ? prev : current
    ).crop *
    lenses.reduce((prev, current) =>
      prev.maximum < current.maximum ? prev : current
    ).maximum *
    teleconverters.reduce((prev, current) =>
      prev.magnification < current.magnification ? prev : current
    ).magnification;
    */
  const maxPossibleFocalLength =
    cameras.reduce((prev, current) =>
      prev.crop > current.crop ? prev : current
    ).crop *
    lenses.reduce((prev, current) =>
      prev.maximum > current.maximum ? prev : current
    ).maximum *
    teleconverters.reduce((prev, current) =>
      prev.magnification > current.magnification ? prev : current
    ).magnification;
  const magnification = selectedEquipment.lens?.convertible
    ? selectedEquipment.teleconverter?.magnification
    : 1;
  const minFocalLength =
    selectedEquipment.camera?.crop *
    selectedEquipment.lens?.minimum *
    magnification;
  const maxFocalLength =
    selectedEquipment.camera?.crop *
    selectedEquipment.lens?.maximum *
    magnification;
  // minPossibleFocalLength
  const rangeStart =
    Math.round((minFocalLength / maxPossibleFocalLength) * 100) + "%";
  const rangeWidth =
    Math.round(
      ((maxFocalLength - minFocalLength) / maxPossibleFocalLength) * 100
    ) + "%";
  let newApertureMinimum =
    selectedEquipment.camera?.crop *
    selectedEquipment.lens?.maximumApertureRangeStart;
  if (selectedEquipment.teleconverter.magnification !== 1) {
    newApertureMinimum =
      newApertureMinimum * selectedEquipment.teleconverter.magnification;
  }
  newApertureMinimum = Math.round(newApertureMinimum * 10) / 10;
  let newApertureMaximum =
    selectedEquipment.camera?.crop *
    selectedEquipment.lens?.maximumApertureRangeEnd;
  if (selectedEquipment.teleconverter.magnification !== 1) {
    newApertureMaximum =
      newApertureMaximum * selectedEquipment.teleconverter.magnification;
  }
  newApertureMaximum = Math.round(newApertureMaximum * 10) / 10;
  return (
    <div style={{ margin: "0px", padding: "0px" }}>
      {hasSelections && (
        <div className="progress">
          <div
            className="progress-bar progress-bar-spacer"
            role="progressbar"
            style={{ width: rangeStart }}
          >
            &nbsp;
          </div>
          <div
            className="progress-bar progress-bar-graph"
            role="progressbar"
            style={{ width: rangeWidth }}
          >
            <span>
              &nbsp;
              {minFocalLength !== maxFocalLength && (
                <span>{minFocalLength}-</span>
              )}
              {maxFocalLength}mm
              <span style={{ display: "none" }}> f{newApertureMinimum}</span>
              {newApertureMinimum !== newApertureMaximum && (
                <span style={{ display: "none" }}>-{newApertureMaximum}</span>
              )}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
