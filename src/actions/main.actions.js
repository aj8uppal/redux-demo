export function setMood(newMood){
  return {
    type: 'SET_MOOD',
    newMood
  }
}

export function updateScenarioFieldById(scenario_id, key, value){
  return {
    type: 'UPDATE_SCENARIO_FIELD_BY_ID',
    scenario_id,
    key,
    value
  }
}
