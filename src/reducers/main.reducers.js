const initialState = {
  mood: 1,
  scenarios: [{id: 2, name: "AJ", age: 17}] //{id: int, name: string}
}

const mainReducer = function categories(state=initialState, action) {
  switch(action.type) {
    case 'SET_MOOD': {
      // console.log(action.newMood)
      return state = {
        ...state,
        mood: action.newMood
      }
    }
    case 'UPDATE_SCENARIO_FIELD_BY_ID': {
      state = {...initialState};
      state.scenarios.getScenarioById(action.id)[action.key] = action.value;
      return state;
    }
    default:
      return state;
  }
}


export default mainReducer;
