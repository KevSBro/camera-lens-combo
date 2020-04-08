// "Reducer": specify the application state changes (in response to certain actions) to our store (our context).

export default (state, action) => {
  switch (action.type) {
    case "DELETE_CAMERA":
      // remove a camera from the list
      return {
        ...state,
        cameras: state.cameras.filter(cam => cam.id !== action.payload.id)
      };
    case "ADD_CAMERA":
      // prepend to the camera list
      return {
        ...state,
        cameras: [action.payload, ...state.cameras]
      };
    case "SELECT_CAMERA":
      // set the camera in the equipment object
      const camera = state.cameras.filter(
        camera => camera.id.toString() === action.payload
      )[0];
      const selectedCamera = { ...state.selectedEquipment, camera };
      return {
        ...state,
        selectedEquipment: selectedCamera
      };
    case "DELETE_LENS":
      // remove a lens from the list
      return {
        ...state,
        lenses: state.lenses.filter(lens => lens.id !== action.payload.id)
      };
    case "ADD_LENS":
      // prepend to the lens list
      return {
        ...state,
        lenses: [action.payload, ...state.lenses]
      };
    case "SELECT_LENS":
      // set the lens in the equipment object
      const lens = state.lenses.filter(
        lens => lens.id.toString() === action.payload
      )[0];
      const selectedLens = { ...state.selectedEquipment, lens };
      return {
        ...state,
        selectedEquipment: selectedLens
      };
    case "DELETE_TELECONVERTER":
      // remove a teleconverter from the list
      return {
        ...state,
        teleconverters: state.teleconverters.filter(
          teleconverter => teleconverter.id !== action.payload.id
        )
      };
    case "ADD_TELECONVERTER":
      // prepend to the teleconverters list
      return {
        ...state,
        teleconverters: [action.payload, ...state.teleconverters]
      };
    case "SELECT_TELECONVERTER":
      // set the teleconverter in the equipment object
      const teleconverter = state.teleconverters.filter(
        teleconverter => teleconverter.id.toString() === action.payload
      )[0];
      const selectedTeleconverter = {
        ...state.selectedEquipment,
        teleconverter
      };
      return {
        ...state,
        selectedEquipment: selectedTeleconverter
      };
    default:
      return state;
  }
};
