// Module ID: 9825
// Function ID: 9826
// Name: ChannelDetailsStore
// Dependencies: [560, 1259, 2]
// Exports: deleteChannelDetailsSearchState, deleteChannelStates, getIsChannelDetailsSearchActive, setIsChannelDetailsSearchActive, useChannelDetailsSearchActiveSource, useIsChannelDetailsSearchActive

// Module 9825 (ChannelDetailsStore)
import react_native from "react-native" /* 1259 */;
import module_560 from "module_560" /* 560 */;
import size from "module_2" /* 2 */;

let map, setState;

let closure_2 = { isSearchActive: false, searchActiveSource: "initial" };
const useChannelDetailsStore = module_560.create(() => {
  const obj = { states: new Map() };
  new Map();
  return obj;
});
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/sidebar/details/stores/ChannelDetailsStore.tsx");

export { useChannelDetailsStore };
export function deleteChannelStates() {
  let obj = react_native;
  obj.batchUpdates(() => {
    setState = setState.setState;
    const obj = { states: new Map() };
    new Map();
    return setState(obj);
  });
}
export function useIsChannelDetailsSearchActive(arg0) {
  let closure_0 = arg0;
  const f95653 = (isSearchActive) => isSearchActive.isSearchActive;
  return obj((states) => {
    states = states.states;
    let value = states.get(closure_0);
    if (value == null) {
      const obj = {};
      const merged = Object.assign(closure_2);
      value = obj;
    }
    return f95654(value);
  });
}
export function useChannelDetailsSearchActiveSource(arg0) {
  let obj;
  let closure_0 = arg0;
  const f95654 = (searchActiveSource) => searchActiveSource.searchActiveSource;
  return obj((states) => {
    states = states.states;
    let value = states.get(closure_0);
    if (value == null) {
      const obj = {};
      const merged = Object.assign(closure_2);
      value = obj;
    }
    return f95654(value);
  });
}
export function setIsChannelDetailsSearchActive(arg0, isSearchActive, searchActiveSource) {
  let obj = { isSearchActive, searchActiveSource };
  const states = obj.getState().states;
  let value = states.get(arg0);
  if (value == null) {
    const obj2 = {};
    const merged = Object.assign(closure_2);
    value = obj2;
  }
  const obj3 = {};
  const merged1 = Object.assign(value);
  const merged2 = Object.assign(obj);
  map = new Map(states);
  const result = map.set(arg0, obj3);
  const obj5 = map(1259);
  obj5.batchUpdates(() => {
    const obj = { states: map };
    return obj.setState(obj);
  });
}
export function getIsChannelDetailsSearchActive(arg0) {
  let obj;
  const states = obj.getState().states;
  let value = states.get(arg0);
  if (value == null) {
    obj = {};
    const merged = Object.assign(closure_2);
    value = obj;
  }
  return value.isSearchActive;
}
export function deleteChannelDetailsSearchState(arg0) {
  let obj;
  const states = obj.getState().states;
  states.delete(arg0);
  map = new Map(states);
  obj = map(1259);
  obj.batchUpdates(() => {
    const obj = { states: map };
    return obj.setState(obj);
  });
}
