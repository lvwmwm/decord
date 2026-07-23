// Module ID: 1432
// Function ID: 16728
// Name: configure
// Dependencies: [57, 31, 27, 1433, 1434, 1439]
// Exports: fetch, refresh, useNetInfo, useNetInfoInstance

// Module 1432 (configure)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { Platform } from "get ActivityIndicator";
import reachabilityTest from "reachabilityTest";

let closure_4;
let closure_5;
let closure_6;
function configure(arg0) {
  let reachabilityTest = Object.assign({}, importDefault(1433), arg0);
  if (_null) {
    _null.tearDown();
    _null = createState();
  }
}
function fetch(arg0) {
  if (!_null) {
    _null = createState();
  }
  return _null.latest(arg0);
}
function refresh() {
  if (!_null) {
    _null = createState();
  }
  if (c10) {
    let cleanupPromise = new Promise((arg0) => {
      outer1_11.push(arg0);
    });
  } else {
    c10 = true;
    const _fetchCurrentStateResult = _null._fetchCurrentState();
    cleanupPromise = _null._fetchCurrentState().then((arg0) => {
      let closure_0 = arg0;
      const item = outer1_11.forEach((arg0) => arg0(closure_0));
      outer1_11 = [];
      return arg0;
    }).finally(() => {
      let c10 = false;
    });
    const nextPromise = _null._fetchCurrentState().then((arg0) => {
      let closure_0 = arg0;
      const item = outer1_11.forEach((arg0) => arg0(closure_0));
      outer1_11 = [];
      return arg0;
    });
  }
  return cleanupPromise;
}
function addEventListener(arg0) {
  let closure_0 = arg0;
  if (!_null) {
    _null = createState();
  }
  _null.add(arg0);
  return () => {
    if (closure_8) {
      closure_8.remove(closure_0);
    }
  };
}
function useNetInfo(arg0) {
  if (arg0) {
    configure(arg0);
  }
  const obj = { type: importAll(1439).NetInfoStateType.unknown, isConnected: null, isInternetReachable: null, details: null };
  const tmp3 = callback(callback2(obj), 2);
  let closure_0 = tmp3[1];
  callback3(() => {
    closure_0 = outer1_13(closure_0);
    return () => callback();
  }, []);
  return tmp3[0];
}
function useNetInfoInstance() {
  let tmp = arguments.length > 0 && undefined !== arguments[0] && arguments[0];
  const importDefault = tmp;
  let tmp2;
  if (arguments.length > 1) {
    tmp2 = arguments[1];
  }
  const importAll = tmp2;
  const tmp3 = callback(callback2(), 2);
  const first = tmp3[0];
  callback = tmp3[1];
  let obj = { type: importAll(first[5]).NetInfoStateType.unknown, isConnected: null, isInternetReachable: null, details: null };
  const tmp5 = callback(callback2(obj), 2);
  callback2 = tmp5[1];
  const items = [tmp, tmp2];
  callback3(() => {
    if (!tmp) {
      const _Object = Object;
      const merged = Object.assign({}, tmp(first[3]), closure_1);
      let tmp6 = tmp(first[4]);
      const prototype = tmp6.prototype;
      tmp6 = new tmp6(merged);
      callback(tmp6);
      tmp6.add(closure_4);
      return tmp6.tearDown;
    }
  }, items);
  obj = {
    netInfo: tmp5[0],
    refresh: callback4(() => {
      let tmp = first;
      if (first) {
        tmp = !outer1_10;
      }
      if (tmp) {
        outer1_10 = true;
        first._fetchCurrentState().finally(() => {
          const outer2_10 = false;
        });
        const _fetchCurrentStateResult = first._fetchCurrentState();
      }
    }, items1)
  };
  items1 = [first];
  return obj;
}
({ useState: closure_4, useEffect: closure_5, useCallback: closure_6 } = result);
let c8 = null;
function createState() {
  let tmp = importDefault(1434);
  tmp = new tmp(reachabilityTest);
  return tmp;
}
let c10 = false;
let closure_11 = [];
for (const key10044 in require("module_1439")) {
  let tmp3 = key10044;
  arg5[key10044] = require("module_1439")[key10044];
  continue;
}

export default { configure, fetch, refresh, addEventListener, useNetInfo, useNetInfoInstance };
export { configure };
export { fetch };
export { refresh };
export { addEventListener };
export { useNetInfo };
export { useNetInfoInstance };
