// Module ID: 8973
// Function ID: 8974
// Name: vibegrationsPreviewControlLease
// Dependencies: [19, 558, 576, 2]
// Exports: acquireVibegrationsControlLease, beginVibegrationsControlOperation, endVibegrationsControlOperation, getVibegrationsControlActiveProjectIds, isVibegrationsControlActive, releaseVibegrationsControlLeases, subscribeVibegrationsControlReleased

// Module 8973 (vibegrationsPreviewControlLease)
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, set2;

function emit() {
  const items = [...set];
  const iter = items[Symbol.iterator]();
  iter.next();
  if (iter !== undefined) {
    try {
      tmp2();
    } catch (err) {
    }
  }
}
function emitReleased(projectId) {
  const items = [...set1];
  const iter = items[Symbol.iterator]();
  iter.next();
  if (iter !== undefined) {
    try {
      tmp2(projectId);
    } catch (err) {
    }
  }
}
function subscribeVibegrationsControl(arg0) {
  let closure_0 = arg0;
  set.add(arg0);
  return () => {
    set.delete(closure_0);
  };
}
const map = new Map();
let set = new Set();
let set1 = new Set();
const map1 = new Map();
const tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let tmp2;
  _require = arg0;
  const obj = require("react");
  const cResult = obj.c(2);
  if (cResult[0] !== arg0) {
    const fn = function n() {
      let tmp2 = null != closure_0;
      if (tmp2) {
        const value = map.get(tmp);
        let num;
        if (value != null) {
          num = value.holders;
        }
        if (num == null) {
          num = 0;
        }
        tmp2 = num > 0;
      }
      return tmp2;
    };
    let num = 0;
    cResult[0] = arg0;
    cResult[1] = fn;
    tmp2 = fn;
  } else {
    tmp2 = cResult[1];
  }
  return react.useSyncExternalStore(subscribeVibegrationsControl, tmp2, tmp2);
}) : ((arg0) => {
  let closure_0 = arg0;
  const items = [arg0];
  const callback = react.useCallback(() => {
    let tmp2 = null != closure_0;
    if (tmp2) {
      const value = map.get(tmp);
      let num;
      if (value != null) {
        num = value.holders;
      }
      if (num == null) {
        num = 0;
      }
      tmp2 = num > 0;
    }
    return tmp2;
  }, items);
  return react.useSyncExternalStore(subscribeVibegrationsControl, callback, callback);
});
function acquireVibegrationsControlLease(arg0) {
  let timerId;
  let closure_0 = arg0;
  let value = timerId.get(arg0);
  const obj = timerId;
  if (value == null) {
    const _Set = Set;
    const self = this;
    const self2 = this;
    const obj2 = { holders: 0, timers: set };
    value = obj2;
    set = new Set();
  }
  dependencyMap = value;
  value.holders = value.holders + 1;
  function release() {
    const tmp = c2;
    if (!tmp) {
      c2 = true;
      const _clearTimeout = clearTimeout;
      clearTimeout(timerId1);
      const obj = map;
      const tmp3 = timerId1;
      if (map.get(closure_0) === value3) {
        const timers = tmp6.timers;
        timers.delete(tmp3);
        value3.holders = value3.holders - 1;
        if (value3.holders <= 0) {
          obj.delete(closure_0);
        }
        emit();
        if (value3.holders <= 0) {
          emitReleased(closure_0);
        }
      }
    }
  }
  const result = obj.set(arg0, value);
  let c2 = false;
  timerId = setTimeout(() => {
    const tmp = c2;
    if (!tmp) {
      c2 = true;
      const _clearTimeout = clearTimeout;
      clearTimeout(timerId1);
      const obj = map;
      const tmp3 = timerId1;
      if (map.get(closure_0) === value3) {
        const timers = tmp6.timers;
        timers.delete(tmp3);
        value3.holders = value3.holders - 1;
        if (value3.holders <= 0) {
          obj.delete(closure_0);
        }
        emit();
        if (value3.holders <= 0) {
          emitReleased(closure_0);
        }
      }
    }
  }, 35000);
  const timers = value.timers;
  timers.add(timerId);
  emit();
  return release;
}
function endVibegrationsControlOperation(openResult) {
  const value = map1.get(openResult);
  const obj = map1;
  if (null != value) {
    obj.delete(openResult);
    const _clearTimeout = clearTimeout;
    clearTimeout(value.timer);
    value.release();
  }
}
function isVibegrationsControlActive(openResult) {
  const value = map.get(openResult);
  let num;
  if (value != null) {
    num = value.holders;
  }
  if (num == null) {
    num = 0;
  }
  return num > 0;
}
let result = size.fileFinishedImporting("modules/vibegrations/lib/vibegrationsPreviewControlLease.tsx");

export { acquireVibegrationsControlLease };
export const CONTROL_OPERATION_IDLE_MS = 20000;
export const beginVibegrationsControlOperation = function beginVibegrationsControlOperation(Stack2) {
  let release;
  let closure_0 = Stack2;
  let obj = map1;
  let value = map1.get(Stack2);
  const timerId = setTimeout(() => {
    const value = map1.get(Stack2);
    const obj = map1;
    const tmp = Stack2;
    if (null != value) {
      obj.delete(tmp);
      const _clearTimeout = clearTimeout;
      clearTimeout(value.timer);
      value.release();
    }
  }, 20000);
  if (null != value) {
    let _clearTimeout = clearTimeout;
    clearTimeout(value.timer);
    closure_0 = Stack2;
    let c2;
    let timerId1;
    let value3 = map.get(Stack2);
    const obj5 = map;
    if (value3 == null) {
      const _Set2 = Set;
      const self3 = this;
      const self4 = this;
      const obj2 = { holders: 0, timers: set1 };
      value3 = obj2;
      set1 = new Set();
    }
    value3.holders = value3.holders + 1;
    const release2 = function release() {
      const tmp = c2;
      if (!tmp) {
        c2 = true;
        const _clearTimeout = clearTimeout;
        clearTimeout(timerId1);
        const obj = map;
        const tmp3 = timerId1;
        if (map.get(closure_0) === value3) {
          const timers = tmp6.timers;
          timers.delete(tmp3);
          value3.holders = value3.holders - 1;
          if (value3.holders <= 0) {
            obj.delete(closure_0);
          }
          emit();
          if (value3.holders <= 0) {
            emitReleased(closure_0);
          }
        }
      }
    };
    const result = obj5.set(Stack2, value3);
    c2 = false;
    const _setTimeout2 = setTimeout;
    timerId1 = setTimeout(() => {
      const tmp = c2;
      if (!tmp) {
        c2 = true;
        const _clearTimeout = clearTimeout;
        clearTimeout(timerId1);
        const obj = map;
        const tmp3 = timerId1;
        if (map.get(closure_0) === value3) {
          const timers = tmp6.timers;
          timers.delete(tmp3);
          value3.holders = value3.holders - 1;
          if (value3.holders <= 0) {
            obj.delete(closure_0);
          }
          emit();
          if (value3.holders <= 0) {
            emitReleased(closure_0);
          }
        }
      }
    }, 35000);
    const timers2 = value3.timers;
    timers2.add(timerId1);
    emit();
    value.release();
    const obj3 = { release: release2, timer: timerId };
    const result1 = obj.set(Stack2, obj3);
  } else {
    closure_0 = Stack2;
    c2 = undefined;
    let timerId2;
    set = obj.set;
    let value4 = map.get(Stack2);
    const obj8 = map;
    if (value4 == null) {
      const _Set = Set;
      const self = this;
      const self2 = this;
      const obj4 = { holders: 0, timers: set2 };
      set2 = new Set();
      let tmp3 = set2;
      value4 = obj4;
    }
    const obj6 = { release, timer: timerId };
    value4.holders = value4.holders + 1;
    release = function release() {
      const tmp = c2;
      if (!tmp) {
        c2 = true;
        const _clearTimeout = clearTimeout;
        clearTimeout(timerId1);
        const obj = map;
        const tmp3 = timerId1;
        if (map.get(closure_0) === value3) {
          const timers = tmp6.timers;
          timers.delete(tmp3);
          value3.holders = value3.holders - 1;
          if (value3.holders <= 0) {
            obj.delete(closure_0);
          }
          emit();
          if (value3.holders <= 0) {
            emitReleased(closure_0);
          }
        }
      }
    };
    const result2 = obj8.set(Stack2, value4);
    c2 = false;
    const _setTimeout = setTimeout;
    timerId2 = setTimeout(() => {
      const tmp = c2;
      if (!tmp) {
        c2 = true;
        const _clearTimeout = clearTimeout;
        clearTimeout(timerId1);
        const obj = map;
        const tmp3 = timerId1;
        if (map.get(closure_0) === value3) {
          const timers = tmp6.timers;
          timers.delete(tmp3);
          value3.holders = value3.holders - 1;
          if (value3.holders <= 0) {
            obj.delete(closure_0);
          }
          emit();
          if (value3.holders <= 0) {
            emitReleased(closure_0);
          }
        }
      }
    }, 35000);
    let timers = value4.timers;
    timers.add(timerId2);
    emit();
    const result3 = set(Stack2, obj6);
  }
};
export { endVibegrationsControlOperation };
export const releaseVibegrationsControlLeases = function releaseVibegrationsControlLeases(projectId) {
  const value = map1.get(projectId);
  const obj = map1;
  if (null != value) {
    obj.delete(projectId);
    const _clearTimeout = clearTimeout;
    clearTimeout(value.timer);
  }
  const value2 = map.get(projectId);
  if (null != value2) {
    const timers = value2.timers;
    const tmp7 = timers[Symbol.iterator]();
    while (tmp7 !== undefined) {
      let _clearTimeout2 = clearTimeout;
      let clearTimeoutResult1 = clearTimeout(tmp10);
      continue;
    }
    map.delete(projectId);
    emit();
    emitReleased(projectId);
  }
};
export { isVibegrationsControlActive };
export const getVibegrationsControlActiveProjectIds = function getVibegrationsControlActiveProjectIds() {
  const items = [...map.keys()];
  return items;
};
export { subscribeVibegrationsControl };
export const subscribeVibegrationsControlReleased = function subscribeVibegrationsControlReleased(arg0) {
  let closure_0 = arg0;
  set1.add(arg0);
  return () => {
    set1.delete(closure_0);
  };
};
export const useVibegrationsControlActive = tmp6;
