// Module ID: 9132
// Function ID: 71499
// Name: createChannelState
// Dependencies: [621, 682, 2]
// Exports: deleteChannelDetailsSearchState, deleteChannelStates, getIsChannelDetailsSearchActive, setIsChannelDetailsSearchActive, useChannelDetailsSearchActiveSource, useIsChannelDetailsSearchActive

// Module 9132 (createChannelState)
import keys from "keys";

function createChannelState() {
  const merged = Object.assign(closure_2);
  return {};
}
function useChannelState(arg0, arg1) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  return obj((states) => {
    states = states.states;
    let value = states.get(closure_0);
    if (null == value) {
      value = outer1_4();
    }
    return callback(value);
  });
}
let closure_2 = { isSearchActive: false, searchActiveSource: "initial" };
let obj = keys.create(() => {
  const obj = { states: new Map() };
  return obj;
});
let result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/sidebar/details/stores/ChannelDetailsStore.tsx");

export const useChannelDetailsStore = obj;
export const deleteChannelStates = function deleteChannelStates() {
  require(682) /* batchUpdates */.batchUpdates(() => {
    const obj = { states: new Map() };
    return outer1_3.setState(obj);
  });
};
export const useIsChannelDetailsSearchActive = function useIsChannelDetailsSearchActive(arg0) {
  return useChannelState(arg0, (isSearchActive) => isSearchActive.isSearchActive);
};
export const useChannelDetailsSearchActiveSource = function useChannelDetailsSearchActiveSource(arg0) {
  return useChannelState(arg0, (searchActiveSource) => searchActiveSource.searchActiveSource);
};
export const setIsChannelDetailsSearchActive = function setIsChannelDetailsSearchActive(arg0, isSearchActive, searchActiveSource) {
  (function upsertChannelState(arg0, arg1) {
    const states = outer1_3.getState().states;
    let value = states.get(arg0);
    if (null == value) {
      value = outer1_4();
    }
    const merged = Object.assign(value);
    const merged1 = Object.assign(arg1);
    const map = new Map(states);
    const result = map.set(arg0, {});
    outer1_0(outer1_1[1]).batchUpdates(() => outer2_3.setState({ states: map }));
  })(arg0, { isSearchActive, searchActiveSource });
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
  const map = new Map(states);
  obj = map(682);
  obj.batchUpdates(() => outer1_3.setState({ states: map }));
};
