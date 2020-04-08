import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// Initial State
const cameras = [
  {
    id: 1,
    name: "Sony a7R II",
    crop: 1
  },
  {
    id: 2,
    name: "Sony a6500",
    crop: 1.5
  }
];
const lenses = [
  {
    id: 7,
    name: "25mm Batis",
    zoom: false,
    minimum: 25,
    maximum: 25,
    convertible: false,
    maximumApertureRangeStart: 2,
    maximumApertureRangeEnd: 2,
    fullFrame: true
  },
  {
    id: 9,
    name: "55mm Zeiss",
    zoom: false,
    minimum: 55,
    maximum: 55,
    convertible: false,
    maximumApertureRangeStart: 1.8,
    maximumApertureRangeEnd: 1.8,
    fullFrame: true
  },
  {
    id: 8,
    name: "85mm",
    zoom: false,
    minimum: 85,
    maximum: 85,
    convertible: false,
    maximumApertureRangeStart: 1.8,
    maximumApertureRangeEnd: 1.8,
    fullFrame: true
  },
  {
    id: 3,
    name: "90mm G",
    zoom: false,
    minimum: 90,
    maximum: 90,
    convertible: false,
    maximumApertureRangeStart: 2.8,
    maximumApertureRangeEnd: 2.8,
    fullFrame: true
  },
  {
    id: 4,
    name: "16-35mm GM",
    zoom: true,
    minimum: 16,
    maximum: 35,
    convertible: false,
    maximumApertureRangeStart: 2.8,
    maximumApertureRangeEnd: 2.8,
    fullFrame: true
  },
  {
    id: 5,
    name: "24-70mm GM",
    zoom: true,
    minimum: 24,
    maximum: 70,
    convertible: false,
    maximumApertureRangeStart: 2.8,
    maximumApertureRangeEnd: 2.8,
    fullFrame: true
  },
  {
    id: 6,
    name: "70-200mm GM",
    zoom: true,
    minimum: 70,
    maximum: 200,
    convertible: false,
    maximumApertureRangeStart: 2.8,
    maximumApertureRangeEnd: 2.8,
    fullFrame: true
  },
  {
    id: 1,
    name: "100-400mm GM",
    zoom: true,
    minimum: 100,
    maximum: 400,
    convertible: true,
    maximumApertureRangeStart: 4.5,
    maximumApertureRangeEnd: 5.6,
    fullFrame: true
  },
  {
    id: 2,
    name: "200-600mm G",
    zoom: true,
    minimum: 200,
    maximum: 600,
    convertible: true,
    maximumApertureRangeStart: 5.6,
    maximumApertureRangeEnd: 6.3,
    fullFrame: true
  }
];
const teleconverters = [
  {
    id: 0,
    name: "none",
    magnification: 1
  },
  {
    id: 2,
    name: "1.4x",
    magnification: 1.4
  },
  {
    id: 3,
    name: "2x",
    magnification: 2
  }
];
const selectedEquipment = {
  camera: cameras[0] || null,
  lens: lenses[0] || null,
  teleconverter: teleconverters[0]
};
const initialState = {
  cameras,
  lenses,
  teleconverters,
  selectedEquipment
};

//create context
export const GlobalContext = createContext(initialState);

// Wrap all the elements that need to share this context
// in this "provider" component
//Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions (makes calls to our reducer)
  function deleteCamera(camera) {
    dispatch({
      type: "DELETE_CAMERA",
      payload: camera
    });
  }

  function addCamera(camera) {
    dispatch({
      type: "ADD_CAMERA",
      payload: camera
    });
  }

  function selectCamera(cameraId) {
    dispatch({
      type: "SELECT_CAMERA",
      payload: cameraId
    });
  }

  function deleteLens(lens) {
    dispatch({
      type: "DELETE_LENS",
      payload: lens
    });
  }

  function addLens(lens) {
    dispatch({
      type: "ADD_LENS",
      payload: lens
    });
  }

  function selectLens(lensId) {
    dispatch({
      type: "SELECT_LENS",
      payload: lensId
    });
  }

  function deleteTeleconverter(teleconverter) {
    dispatch({
      type: "DELETE_TELECONVERTER",
      payload: teleconverter
    });
  }

  function addTeleconverter(teleconverter) {
    dispatch({
      type: "ADD_TELECONVERTER",
      payload: teleconverter
    });
  }

  function selectTeleconverter(teleconverterId) {
    dispatch({
      type: "SELECT_TELECONVERTER",
      payload: teleconverterId
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        cameras: state.cameras,
        lenses: state.lenses,
        teleconverters: state.teleconverters,
        selectedEquipment: state.selectedEquipment,
        deleteCamera,
        addCamera,
        selectCamera,
        deleteLens,
        addLens,
        selectLens,
        deleteTeleconverter,
        addTeleconverter,
        selectTeleconverter
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
