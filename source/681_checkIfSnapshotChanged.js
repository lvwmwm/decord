// Module ID: 681
// Function ID: 8398
// Name: checkIfSnapshotChanged
// Dependencies: [31]

// Module 681 (checkIfSnapshotChanged)
import result from "result";

let closure_1;
let closure_2;
let closure_3;
let closure_4;
function checkIfSnapshotChanged(value) {
  return !is(value.value, value.getSnapshot());
}
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
({ useState: closure_1, useEffect: closure_2, useLayoutEffect: closure_3, useDebugValue: closure_4 } = result);

export const useSyncExternalStore = undefined !== result.useSyncExternalStore ? result.useSyncExternalStore : (function useSyncExternalStore$1(arg0, getSnapshot) {
  let closure_0 = arg0;
  const callback = getSnapshot;
  const tmp = getSnapshot();
  const callback2 = tmp;
  const tmp2 = callback({ inst: { value: tmp, getSnapshot } });
  const inst = tmp2[0].inst;
  const callback3 = tmp2[1];
  const items = [arg0, tmp, getSnapshot];
  inst(() => {
    inst.value = closure_2;
    inst.getSnapshot = closure_1;
    if (outer1_5(inst)) {
      const obj = { inst };
      callback2(obj);
    }
  }, items);
  const items1 = [arg0];
  callback2(() => {
    if (outer1_5(inst)) {
      let obj = { inst };
      callback2(obj);
    }
    return callback(() => {
      if (outer2_5(outer1_3)) {
        const obj = { inst: outer1_3 };
        outer1_4(obj);
      }
    });
  }, items1);
  callback3(tmp);
  return tmp;
});
