// Module ID: 3996
// Function ID: 33154
// Name: defaultStatesAreEqual
// Dependencies: []
// Exports: createZustandStore

// Module 3996 (defaultStatesAreEqual)
function defaultStatesAreEqual(arg0, arg1) {
  return arg0 === arg1;
}
const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("lib/ZustandStore.tsx");

export const createZustandStore = function createZustandStore(arg0) {
  const require = arg0;
  function useState(arg0) {
    let tmp = arg1;
    if (arg1 === undefined) {
      tmp = setState;
    }
    return store(arg0, tmp);
  }
  function getState(arg0) {
    const state = store.getState();
    let tmp2 = state;
    if (null != arg0) {
      tmp2 = arg0(state);
    }
    return tmp2;
  }
  let obj = require(closure_1[0]);
  closure_1 = obj.createWithEqualityFn(require(closure_1[1]).subscribeWithSelector((arg0, arg1, arg2) => arg0((arg0) => arg0(closure_1[2]).batchUpdates(() => arg0(arg0)), arg1, arg2)));
  function setState(arg0) {
    arg0(closure_1[2]).batchUpdates(() => state.setState(arg0));
  }
  const defaultStatesAreEqual = setState;
  obj = {
    useState,
    getState,
    useField(blocklist) {
      let tmp = arg1;
      if (arg1 === undefined) {
        tmp = setState;
      }
      return useState((arg0) => arg0[closure_0], tmp);
    },
    getField(blocklist) {
      return getState((arg0) => arg0[closure_0]);
    },
    subscribe(arg0, arg1, arg2) {
      return store.subscribe(arg0, arg1, arg2);
    },
    setState,
    resetState() {
      setState(store.getInitialState());
    }
  };
  return obj;
};
