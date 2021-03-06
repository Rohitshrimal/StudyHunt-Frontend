import * as types from "../constants/actionTypes";

const initialState = {
  socket: null,
  temperature: "N/A",
  roomTemperature: "N/A",
  luminosity: -1,
  lights: "N/A",
};

export default function ui(state = initialState, action) {
  switch (action.type) {
    case types.SERVER_CONNECTED:
      return {
        ...state,
        socket: action.socket
      };
    case types.UPDATE_FRONTEND: {
      return {
        ...state,
        roomTemperature: action.roomTemperature,
        temperature: action.temperature,
        lights: action.lights,
        luminosity: action.luminosity
      }
    }
    case types.SERVER_DISCONNECTED: {
      return {
        ...initialState
      }
    }
    default:
      return state;
  }
}
