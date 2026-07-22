// Module ID: 1432
// Function ID: 16727
// Name: configure
// Dependencies: []
// Exports: fetch, refresh, useNetInfo, useNetInfoInstance

// Module 1432 (configure)
function configure(arg0) {
  let closure_7 = Object.assign({}, importDefault(dependencyMap[3]), arg0);
  if (set) {
    set.tearDown();
    const set = createState();
  }
}
function fetch(arg0) {
  if (!set) {
    const set = createState();
  }
  return set.latest(arg0);
}
function refresh() {
  if (!set) {
    const set = createState();
  }
  if (closure_10) {
    let cleanupPromise = new Promise((arg0) => {

    });
  } else {
    closure_10 = true;
    const _fetchCurrentStateResult = set._fetchCurrentState();
    cleanupPromise = set._fetchCurrentState().then((arg0) => {
      const item = arr.forEach((arg0) => arg0(arg0));
      return arg0;
    }).finally(() => {
      let closure_10 = false;
    });
    const nextPromise = set._fetchCurrentState().then((arg0) => {
      const item = arr.forEach((arg0) => arg0(arg0));
      return arg0;
    });
  }
  return cleanupPromise;
}
function addEventListener(arg0) {
  const importDefault = arg0;
  if (!set) {
    const set = createState();
  }
  set.add(arg0);
  return () => {
    if (closure_8) {
      closure_8.remove(arg0);
    }
  };
}
function useNetInfo(arg0) {
  if (arg0) {
    configure(arg0);
  }
  const obj = { "Null": true, "Null": 5, "Null": true, "Null": true, type: importAll(dependencyMap[5]).NetInfoStateType.unknown };
  const tmp3 = callback(callback2(obj), 2);
  let closure_0 = tmp3[1];
  callback3(() => {
    closure_0 = callback(closure_0);
    return () => callback();
  }, []);
  return tmp3[0];
}
function useNetInfoInstance() {
  const tmp = arguments.length > 0 && undefined !== arguments[0] && arguments[0];
  const importDefault = tmp;
  let tmp2;
  if (arguments.length > 1) {
    tmp2 = arguments[1];
  }
  const importAll = tmp2;
  const tmp3 = callback(callback2(), 2);
  const first = tmp3[0];
  const dependencyMap = first;
  const callback = tmp3[1];
  let obj = { "Null": true, "Null": 5, "Null": true, "Null": true, type: importAll(dependencyMap[5]).NetInfoStateType.unknown };
  const tmp5 = callback(callback2(obj), 2);
  const callback2 = tmp5[1];
  const items = [tmp, tmp2];
  callback3(() => {
    if (!tmp) {
      const _Object = Object;
      const merged = Object.assign({}, tmp(first[3]), tmp2);
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
        tmp = !closure_10;
      }
      if (tmp) {
        closure_10 = true;
        first._fetchCurrentState().finally(() => {
          let closure_10 = false;
        });
        const _fetchCurrentStateResult = first._fetchCurrentState();
      }
    }, items1)
  };
  const items1 = [first];
  return obj;
}
let closure_3 = importDefault(dependencyMap[0]);
({ useState: closure_4, useEffect: closure_5, useCallback: closure_6 } = arg1(dependencyMap[1]));
const Platform = arg1(dependencyMap[2]).Platform;
let closure_7 = importDefault(dependencyMap[3]);
let closure_8 = null;
function createState() {
  let tmp = importDefault(dependencyMap[4]);
  tmp = new tmp(closure_7);
  return tmp;
}
let closure_10 = false;
let closure_11 = [];
for (const key10044 in arg1(arg6[5])) {
  let tmp3 = key10044;
  arg5[key10044] = arg1(arg6[5])[key10044];
}

export default { configure, fetch, refresh, addEventListener, useNetInfo, useNetInfoInstance };
export { configure };
export { fetch };
export { refresh };
export { addEventListener };
export { useNetInfo };
export { useNetInfoInstance };
