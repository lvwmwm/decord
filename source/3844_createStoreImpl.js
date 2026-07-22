// Module ID: 3844
// Function ID: 32028
// Name: createStoreImpl
// Dependencies: []

// Module 3844 (createStoreImpl)
function createStoreImpl(arg0) {
  const set = new Set();
  function setState(arg0, arg1) {
    let tmp = arg1;
    let tmp2 = arg0;
    if ("function" === typeof arg0) {
      tmp2 = arg0(tmp2);
    }
    if (!Object.is(tmp2, tmp2)) {
      if (null == tmp) {
        tmp = "object" !== typeof tmp2 || null === tmp2;
        const tmp6 = "object" !== typeof tmp2 || null === tmp2;
      }
      let merged = tmp2;
      if (!tmp) {
        const _Object = Object;
        merged = Object.assign({}, tmp2, tmp2);
      }
      tmp2 = merged;
      const item = set.forEach((arg0) => arg0(merged, merged));
    }
  }
  function getState() {
    return tmp2;
  }
  const obj = {
    setState,
    getState,
    getInitialState() {
      return tmp2;
    },
    subscribe(arg0) {
      set.add(arg0);
      return () => set.delete(arg0);
    }
  };
  const tmp2 = arg0(setState, getState, obj);
  const createStoreImpl = tmp2;
  return obj;
}
arg5.createStore = function createStore(arg0) {
  if (arg0) {
    let tmpResult = tmp(arg0);
  } else {
    tmpResult = tmp;
  }
  return tmpResult;
};
