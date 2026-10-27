// Module ID: 12227
// Function ID: 12228
// Name: useConjurePublishHistory
// Dependencies: [32, 19, 1128, 3830, 2049, 558, 576, 12228, 12223, 2]
// Exports: publishHistoryTitle

// Module 12227 (useConjurePublishHistory)
import intl2 from "intl" /* 1128 */;
import _modDef2049 from "module_2049" /* 2049 */;
import _modDef3830 from "module_3830" /* 3830 */;
import conjurePublishHistoryRequests from "conjurePublishHistoryRequests" /* 12228 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, map;

let ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjurePublishHistory(arg0) {
  let arr2;
  let closure_0;
  let closure_2;
  let first;
  let historyLoad;
  let nextCursor;
  let tmp7;
  let tmp9;
  _require = arg0;
  let obj = require("react");
  const cResult = obj.c(19);
  const tmp = _require;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const _Map = Map;
    const self = this;
    const self2 = this;
    map = new Map();
    cResult[0] = map;
    first = map;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [null];
    cResult[1] = items;
    tmp7 = items;
  } else {
    tmp7 = cResult[1];
  }
  [arr2, importDefault] = historyLoad(nextCursor.useState(tmp7), 2);
  historyLoad(nextCursor.useState(tmp7), 2);
  if (cResult[2] !== arr2) {
    let atResult = arr2.at(-1);
    if (atResult == null) {
      atResult = null;
    }
    cResult[2] = arr2;
    cResult[3] = atResult;
    tmp9 = atResult;
  } else {
    tmp9 = cResult[3];
  }
  dependencyMap = tmp9;
  if (cResult[4] === tmp9) {
    let tmp12;
    let tmp18;
    if (cResult[5] === arg0) {
      tmp12 = cResult[6];
    }
    const tmpResult = tmp(12223);
    historyLoad = tmpResult.useHistoryLoad(tmp12);
    nextCursor = null;
    if ("loaded" === historyLoad.state.status) {
      nextCursor = historyLoad.state.data.nextCursor;
    }
    const _Symbol = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      class P {
        constructor() {
          return closure_1((arr) => {
            let substr = arr;
            if (arr.length > 1) {
              substr = arr.slice(0, -1);
            }
            return substr;
          });
        }
      }
      cResult[7] = P;
      tmp18 = P;
    } else {
      class P {
        constructor() {
          return closure_1((arr) => {
            let substr = arr;
            if (arr.length > 1) {
              substr = arr.slice(0, -1);
            }
            return substr;
          });
        }
      }
    }
    if (cResult[8] !== nextCursor) {
      class C {
        constructor() {
          if (null != nextCursor) {
            tmp = closure_1;
            tmp2 = closure_1((arg0) => {
              const items = [];
              items[HermesBuiltin.arraySpread(items, arg0, 0)] = nextCursor;
              return items;
            });
          }
          return;
        }
      }
      cResult[8] = nextCursor;
      cResult[9] = C;
    } else {
      class C {
        constructor() {
          if (null != nextCursor) {
            tmp = closure_1;
            tmp2 = closure_1((arg0) => {
              const items = [];
              items[HermesBuiltin.arraySpread(items, arg0, 0)] = nextCursor;
              return items;
            });
          }
          return;
        }
      }
    }
    if (cResult[10] !== historyLoad) {
      class C {
        constructor() {
          if (null != nextCursor) {
            tmp = closure_1;
            tmp2 = closure_1((arg0) => {
              const items = [];
              items[HermesBuiltin.arraySpread(items, arg0, 0)] = nextCursor;
              return items;
            });
          }
          return;
        }
      }
      cResult[10] = historyLoad;
      cResult[11] = tmp21;
    } else {
      class C {
        constructor() {
          if (null != nextCursor) {
            tmp = closure_1;
            tmp2 = closure_1((arg0) => {
              const items = [];
              items[HermesBuiltin.arraySpread(items, arg0, 0)] = nextCursor;
              return items;
            });
          }
          return;
        }
      }
    }
    if (cResult[12] === arr2.length) {
      class C {
        constructor() {
          if (null != nextCursor) {
            tmp = closure_1;
            tmp2 = closure_1((arg0) => {
              const items = [];
              items[HermesBuiltin.arraySpread(items, arg0, 0)] = nextCursor;
              return items;
            });
          }
          return;
        }
      }
    }
    const obj2 = { state: historyLoad.state, notesCache: first, page: arr2.length, hasPrevious: arr2.length > 1, hasNext: null != nextCursor, previous: tmp18, next: tmp19, retry: tmp20 };
    cResult[12] = arr2.length;
    cResult[13] = historyLoad.state;
    cResult[14] = arr2.length > 1;
    cResult[15] = null != nextCursor;
    cResult[16] = tmp19;
    cResult[17] = tmp20;
    cResult[18] = obj2;
  }
  const fn = function p() {
    const obj = conjurePublishHistoryRequests;
    return obj.fetchPublishHistory(closure_0, closure_2);
  };
  cResult[4] = tmp9;
  cResult[5] = arg0;
  cResult[6] = fn;
  tmp12 = fn;
}) : (function useConjurePublishHistory(arg0) {
  let arr;
  let closure_0;
  let historyLoad;
  let nextCursor;
  _require = arg0;
  let obj = nextCursor;
  const memo = nextCursor.useMemo(() => {
    map = new Map();
    return map;
  }, []);
  [arr, importDefault] = historyLoad(nextCursor.useState([null]), 2);
  const tmp2 = historyLoad(nextCursor.useState([null]), 2);
  let atResult = arr.at(-1);
  if (atResult == null) {
    atResult = null;
  }
  dependencyMap = atResult;
  let items = [arg0, atResult];
  const callback = obj.useCallback(() => {
    const obj = conjurePublishHistoryRequests;
    return obj.fetchPublishHistory(closure_0, dependencyMap);
  }, items);
  const obj2 = require("useConjureHistoryData");
  historyLoad = obj2.useHistoryLoad(callback);
  nextCursor = null;
  if ("loaded" === historyLoad.state.status) {
    nextCursor = historyLoad.state.data.nextCursor;
  }
  return {
    state: historyLoad.state,
    notesCache: memo,
    page: arr.length,
    hasPrevious: arr.length > 1,
    hasNext: null != nextCursor,
    previous() {
      return importDefault((arr) => {
        let substr = arr;
        if (arr.length > 1) {
          substr = arr.slice(0, -1);
        }
        return substr;
      });
    },
    next() {
      if (null != nextCursor) {
        importDefault((arg0) => {
          const items = [];
          items[HermesBuiltin.arraySpread(items, arg0, 0)] = nextCursor;
          return items;
        });
      }
    },
    retry() {
      importDefault([null]);
      historyLoad.retry();
    }
  };
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjurePublishHistoryNotes(arg0, arg1, get) {
  let closure_0;
  _require = arg0;
  let closure_1 = arg1;
  dependencyMap = get;
  let tmp = _require;
  let obj = require("react");
  const cResult = obj.c(11);
  const combined = "" + arg0 + "/" + arg1;
  if (cResult[0] === get) {
    if (cResult[1] === combined) {
      if (cResult[2] === arg1) {
        let tmp5;
        if (cResult[3] === arg0) {
          tmp5 = cResult[4];
        }
        const tmpResult = tmp(12223);
        const historyLoad = tmpResult.useHistoryLoad(tmp5);
        if (cResult[5] === get) {
          let state;
          if (cResult[6] === combined) {
            state = cResult[7];
          }
          let status;
          if (state != null) {
            status = state.status;
          }
          if ("loaded" !== status) {
            state = historyLoad.state;
          }
          if (cResult[8] === historyLoad) {
            let tmp10;
            if (cResult[9] === state) {
              tmp10 = cResult[10];
            }
            return tmp10;
          }
          let obj2 = { state };
          const merged = Object.assign(historyLoad);
          cResult[8] = historyLoad;
          cResult[9] = state;
          cResult[10] = obj2;
          tmp10 = obj2;
        }
        let value = get.get(combined);
        cResult[5] = get;
        cResult[6] = combined;
        cResult[7] = value;
        state = value;
      }
    }
  }
  const fn = function u() {
    let obj = get;
    const value = get.get(combined);
    let status;
    const tmp = combined;
    if (value != null) {
      status = value.status;
    }
    if ("loaded" === status) {
      return Promise.resolve(value.data);
    } else {
      let status1;
      if (value != null) {
        status1 = value.status;
      }
      if ("loading" === status1) {
        return value.promise;
      } else {
        const obj2 = conjurePublishHistoryRequests;
        const publishHistoryNotes = obj2.fetchPublishHistoryNotes(closure_0, closure_1);
        const nextPromise = publishHistoryNotes.then((data) => {
          const obj = { status: "loaded", data, nowMs: Date.now() };
          const result = map.set(combined, obj);
          return data;
        }, (arg0) => {
          map.delete(combined);
          throw arg0;
        });
        const obj3 = { status: "loading", promise: nextPromise };
        let result = obj.set(tmp, obj3);
        return nextPromise;
      }
    }
  };
  cResult[0] = get;
  cResult[1] = combined;
  cResult[2] = arg1;
  cResult[3] = arg0;
  cResult[4] = fn;
  tmp5 = fn;
}) : (function useConjurePublishHistoryNotes(arg0, arg1, get) {
  let closure_0;
  _require = arg0;
  let closure_1 = arg1;
  dependencyMap = get;
  const combined = "" + arg0 + "/" + arg1;
  const items = [arg0, arg1, get, combined];
  const callback = react.useCallback(() => {
    let obj = get;
    const value = get.get(combined);
    let status;
    const tmp = combined;
    if (value != null) {
      status = value.status;
    }
    if ("loaded" === status) {
      return Promise.resolve(value.data);
    } else {
      let status1;
      if (value != null) {
        status1 = value.status;
      }
      if ("loading" === status1) {
        return value.promise;
      } else {
        const obj2 = conjurePublishHistoryRequests;
        const publishHistoryNotes = obj2.fetchPublishHistoryNotes(closure_0, closure_1);
        const nextPromise = publishHistoryNotes.then((data) => {
          const obj = { status: "loaded", data, nowMs: Date.now() };
          const result = map.set(combined, obj);
          return data;
        }, (arg0) => {
          map.delete(combined);
          throw arg0;
        });
        const obj3 = { status: "loading", promise: nextPromise };
        let result = obj.set(tmp, obj3);
        return nextPromise;
      }
    }
  }, items);
  let obj = require("useConjureHistoryData");
  const historyLoad = obj.useHistoryLoad(callback);
  let state = get.get(combined);
  let obj2 = { state };
  const merged = Object.assign(historyLoad);
  let status;
  if (state != null) {
    status = state.status;
  }
  if ("loaded" !== status) {
    state = historyLoad.state;
  }
  return obj2;
});
let result = size.fileFinishedImporting("modules/conjure/history/useConjurePublishHistory.tsx");

export const publishHistoryTitle = function publishHistoryTitle(publishedAt) {
  let obj2;
  const intl = intl2.intl;
  const formatToPlainString = intl.formatToPlainString;
  const obj = { date: obj2.format("LLL") };
  const prop = _modDef3830["/spQzC"];
  obj2 = _modDef2049(publishedAt);
  return formatToPlainString(prop, obj);
};
export const useConjurePublishHistory = tmp2;
export const useConjurePublishHistoryNotes = tmp3;
