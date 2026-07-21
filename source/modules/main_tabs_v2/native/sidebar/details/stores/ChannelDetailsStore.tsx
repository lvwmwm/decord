// Module ID: 9124
// Function ID: 71445
// Name: createChannelState
// Dependencies: []
// Exports: deleteChannelDetailsSearchState, deleteChannelStates, getIsChannelDetailsSearchActive, setIsChannelDetailsSearchActive, useChannelDetailsSearchActiveSource, useIsChannelDetailsSearchActive

// Module 9124 (createChannelState)
function createChannelState() {
  const merged = Object.assign(closure_2);
  return {};
}
function useChannelState(arg0, arg1) {
  const require = arg0;
  const dependencyMap = arg1;
  return obj((states) => {
    states = states.states;
    let value = states.get(states);
    if (null == value) {
      value = callback();
    }
    return arg1(value);
  });
}
let closure_2 = { style: true, contentInset: true };
const _module = require(dependencyMap[0]);
const obj = _module.create(() => {
  const obj = { states: new Map() };
  return obj;
});
const _module1 = require(dependencyMap[2]);
const result = _module1.fileFinishedImporting("modules/main_tabs_v2/native/sidebar/details/stores/ChannelDetailsStore.tsx");

export const useChannelDetailsStore = obj;
export const deleteChannelStates = function deleteChannelStates() {
  require(dependencyMap[1]).batchUpdates(() => {
    const obj = { states: new Map() };
    return state.setState(obj);
  });
};
export const useIsChannelDetailsSearchActive = function useIsChannelDetailsSearchActive(arg0) {
  return useChannelState(arg0, (isSearchActive) => isSearchActive.isSearchActive);
};
export const useChannelDetailsSearchActiveSource = function useChannelDetailsSearchActiveSource(arg0) {
  return useChannelState(arg0, (searchActiveSource) => searchActiveSource.searchActiveSource);
};
export const setIsChannelDetailsSearchActive = function setIsChannelDetailsSearchActive(arg0, isSearchActive, searchActiveSource) {
  function upsertChannelState(arg0, arg1) {
    const states = state.getState().states;
    let value = states.get(arg0);
    if (null == value) {
      value = callback();
    }
    const merged = Object.assign(value);
    const merged1 = Object.assign(arg1);
    const map = new Map(states);
    const result = map.set(arg0, {});
    map(closure_1[1]).batchUpdates(() => state.setState({ states: map }));
  }(arg0, { isSearchActive, searchActiveSource });
};
export const getIsChannelDetailsSearchActive = function getIsChannelDetailsSearchActive(arg0) {
  const states = obj.getState().states;
  let value = states.get(arg0);
  if (null == value) {
    value = createChannelState();
  }
  return value.isSearchActive;
};
export const deleteChannelDetailsSearchState = function deleteChannelDetailsSearchState(arg0) {
  const states = obj.getState().states;
  states.delete(arg0);
  const require = new Map(states);
  const obj = require(dependencyMap[1]);
  obj.batchUpdates(() => state.setState({ states: map }));
};
