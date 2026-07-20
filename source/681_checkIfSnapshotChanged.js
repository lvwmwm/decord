// Module ID: 681
// Function ID: 8394
// Name: checkIfSnapshotChanged
// Dependencies: []

// Module 681 (checkIfSnapshotChanged)
function checkIfSnapshotChanged(value) {
  return !is(value.value, value.getSnapshot());
}
const _module = require(dependencyMap[0]);
if ("function" === typeof Object.is) {
  const _Object = Object;
} else {
  is = function is(arg0, arg1) {
    let tmp = arg0 === arg1;
    if (tmp) {
      let tmp2 = 0 !== arg0;
      if (!tmp2) {
        tmp2 = 1 / arg0 === 1 / arg1;
      }
      tmp = tmp2;
    }
    if (!tmp) {
      tmp = arg0 != arg0 && arg1 != arg1;
      const tmp3 = arg0 != arg0 && arg1 != arg1;
    }
    return tmp;
  };
}
({ useState: closure_1, useEffect: closure_2, useLayoutEffect: closure_3, useDebugValue: closure_4 } = _module);

export const useSyncExternalStore = undefined !== _module.useSyncExternalStore ? _module.useSyncExternalStore : function useSyncExternalStore$1(arg0, getSnapshot) {
  const is = arg0;
  const tmp = getSnapshot();
  const tmp2 = getSnapshot({ inst: { value: tmp, getSnapshot } });
  const inst = tmp2[0].inst;
  const callback = tmp2[1];
  const items = [arg0, tmp, getSnapshot];
  inst(() => {
    inst.value = tmp;
    inst.getSnapshot = arg1;
    if (callback2(inst)) {
      const obj = { inst };
      callback(obj);
      const tmp = callback;
    }
  }, items);
  const items1 = [arg0];
  tmp(() => {
    if (callback2(inst)) {
      const obj = { inst };
      callback(obj);
    }
    return arg0(() => {
      if (callback2(closure_3)) {
        const obj = { inst: closure_3 };
        callback(obj);
      }
    });
  }, items1);
  callback(tmp);
  return tmp;
};
