// Module ID: 3998
// Function ID: 33159
// Name: defaultStatesAreEqual
// Dependencies: [677, 3999, 682, 2]
// Exports: createZustandStore

// Module 3998 (defaultStatesAreEqual)
function defaultStatesAreEqual(arg0, arg1) {
  return arg0 === arg1;
}
const result = require("batchUpdates").fileFinishedImporting("lib/ZustandStore.tsx");

export const createZustandStore = function createZustandStore(arg0) {
  const _require = arg0;
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
  let obj = _require(677);
  const dependencyMap = obj.createWithEqualityFn(_require(3999).subscribeWithSelector((arg0, arg1, arg2) => {
    let callback = arg0;
    return callback((arg0) => {
      const callback = arg0;
      return callback(table[2]).batchUpdates(() => callback(callback));
    }, arg1, arg2);
  }));
  function setState(arg0) {
    const callback = arg0;
    callback(store[2]).batchUpdates(() => outer1_1.setState(closure_0));
  }
  obj = {
    useState,
    getState,
    useField(blocklist) {
      let tmp = arg1;
      let closure_0 = blocklist;
      if (arg1 === undefined) {
        tmp = setState;
      }
      return useState((arg0) => arg0[closure_0], tmp);
    },
    getField(blocklist) {
      let closure_0 = blocklist;
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
