// Module ID: 3846
// Function ID: 32034
// Name: keys
// Dependencies: []

// Module 3846 (keys)
function createStoreImpl(arg0) {
  const set = new Set();
  function setState(arg0, arg1) {
    let tmp = arg1;
    let tmp2 = arg0;
    if ("function" === typeof arg0) {
      tmp2 = arg0(merged);
    }
    if (!Object.is(tmp2, merged)) {
      if (null == tmp) {
        tmp = "object" !== typeof tmp2 || null === tmp2;
        const tmp6 = "object" !== typeof tmp2 || null === tmp2;
      }
      merged = tmp2;
      if (!tmp) {
        const _Object = Object;
        merged = Object.assign({}, merged, tmp2);
      }
      const item = set.forEach((arg0) => arg0(merged, merged));
    }
  }
  function getState() {
    return closure_0;
  }
  const obj = {
    setState,
    getState,
    getInitialState() {
      return closure_2;
    },
    subscribe(arg0) {
      let closure_0 = arg0;
      set.add(arg0);
      return () => outer1_1.delete(closure_0);
    }
  };
  let tmp2 = arg0(setState, getState, obj);
  const createStoreImpl = tmp2;
  let closure_2 = tmp2;
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
