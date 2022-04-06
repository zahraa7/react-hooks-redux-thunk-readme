export function fetchAstronauts(astronauts) {
  return {
    type: "astronauts/astronautsLoaded",
    payload: astronauts,
  };
}


const initialState = {
  entities: [], 
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "astronauts/astronautsLoaded":
      return {
        ...state,
        entities: action.payload,
      };

    default:
      return state;
  }
}