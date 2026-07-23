// Module ID: 679
// Function ID: 8389
// Name: is
// Dependencies: [31, 680]
// Exports: useSyncExternalStoreWithSelector

// Module 679 (is)
import result from "result";

let closure_3;
let closure_4;
let closure_5;
let closure_6;
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
({ useRef: closure_3, useEffect: closure_4, useMemo: closure_5, useDebugValue: closure_6 } = result);

export const useSyncExternalStoreWithSelector = (arg0, arg1, arg2, arg3, arg4) => {
  const _require = arg1;
  const dependencyMap = arg2;
  let closure_2 = arg3;
  let callback = arg4;
  let tmp = callback(null);
  if (null === tmp.current) {
    const obj = { hasValue: false, value: null };
    let current = obj;
    tmp.current = obj;
  } else {
    current = tmp.current;
  }
  let items = [arg1, arg2, arg3, arg4];
  let tmp2 = syncExternalStore(() => {
    function memoizedSelector(arg0) {
      if (callback) {
        if (callback(closure_0, arg0)) {
          return tmp7;
        } else {
          let tmp11 = callback(arg0);
          if (undefined !== tmp) {
            if (tmp(tmp7, tmp11)) {
              closure_0 = arg0;
              tmp11 = tmp7;
            }
            return tmp11;
          }
          closure_0 = arg0;
          let closure_1 = tmp11;
        }
      } else {
        callback = true;
        closure_0 = arg0;
        const tmp2 = callback(arg0);
        if (undefined !== callback) {
          if (memoizedSelector.hasValue) {
            const value = memoizedSelector.value;
            if (tmp(value, tmp2)) {
              closure_1 = value;
              return value;
            }
          }
        }
        closure_1 = tmp2;
        return tmp2;
      }
    }
    let c2 = false;
    let tmp = null;
    if (undefined !== closure_1) {
      tmp = closure_1;
    }
    let closure_3 = tmp;
    const items = [() => memoizedSelector(outer1_0()), ];
    let fn;
    if (null !== tmp) {
      fn = () => memoizedSelector(tmp());
    }
    items[1] = fn;
    return items;
  }, items);
  syncExternalStore = _require(680).useSyncExternalStore(arg0, tmp2[0], tmp2[1]);
  const items1 = [syncExternalStore];
  current(() => {
    current.hasValue = true;
    current.value = syncExternalStore;
  }, items1);
  callback2(syncExternalStore);
  return syncExternalStore;
};
