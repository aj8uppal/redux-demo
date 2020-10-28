const initialState = {
  mood: 1,
}

const mainReducer = function categories(state=initialState, action) {
  switch(action.type) {
    case 'SET_MOOD': {
      console.log(action.newMood)
      return state = {
        ...state,
        mood: action.newMood
      }
    }
    default:
      return state;
  }
}

export default mainReducer;
