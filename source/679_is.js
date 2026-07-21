// Module ID: 679
// Function ID: 8389
// Name: is
// Dependencies: []
// Exports: useSyncExternalStoreWithSelector

// Module 679 (is)
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
({ useRef: closure_3, useEffect: closure_4, useMemo: closure_5, useDebugValue: closure_6 } = _module);

export const useSyncExternalStoreWithSelector = (arg0, arg1, arg2, arg3, arg4) => {
  const require = arg1;
  const dependencyMap = arg2;
  const is = arg3;
  const tmp = arg4(null);
  if (null === tmp.current) {
    const obj = { "Bool(false)": null, "Bool(false)": null };
    let current = obj;
    tmp.current = obj;
  } else {
    current = tmp.current;
  }
  const items = [arg1, arg2, arg3, arg4];
  const tmp2 = syncExternalStore(() => {
    function memoizedSelector(arg0) {
      if (callback2) {
        if (callback2(arg0, arg0)) {
          return tmp7;
        } else {
          let tmp11 = callback2(arg0);
          if (undefined !== tmp) {
            if (tmp(tmp7, tmp11)) {
              tmp11 = tmp7;
            }
            return tmp11;
          }
          let tmp2 = tmp11;
        }
      } else {
        const callback2 = true;
        tmp2 = callback2(arg0);
        if (undefined !== callback2) {
          if (memoizedSelector.hasValue) {
            const value = memoizedSelector.value;
            if (tmp(value, tmp2)) {
              tmp2 = value;
              return value;
            }
          }
        }
        return tmp2;
      }
    }
    let closure_2 = false;
    let tmp = null;
    if (undefined !== arg2) {
      tmp = arg2;
    }
    const arg4 = tmp;
    const items = [() => memoizedSelector(callback()), ];
    let fn;
    if (null !== tmp) {
      fn = () => memoizedSelector(tmp());
    }
    items[1] = fn;
    return items;
  }, items);
  const syncExternalStore = require(dependencyMap[1]).useSyncExternalStore(arg0, tmp2[0], tmp2[1]);
  const items1 = [syncExternalStore];
  current(() => {
    current.hasValue = true;
    current.value = syncExternalStore;
  }, items1);
  callback(syncExternalStore);
  return syncExternalStore;
};
