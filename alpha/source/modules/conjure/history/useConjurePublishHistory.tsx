// Module ID: 12501
// Function ID: 12502
// Name: useConjurePublishHistory
// Dependencies: [32, 19, 1114, 3865, 2044, 12502, 12497, 2]
// Exports: publishHistoryTitle, useConjurePublishHistory, useConjurePublishHistoryNotes

// Module 12501 (useConjurePublishHistory)
import intl2 from "intl" /* 1114 */;
import _modDef2044 from "module_2044" /* 2044 */;
import _modDef3865 from "module_3865" /* 3865 */;
import conjurePublishHistoryRequests from "conjurePublishHistoryRequests" /* 12502 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, map;

let result = size.fileFinishedImporting("modules/conjure/history/useConjurePublishHistory.tsx");

export function publishHistoryTitle(publishedAt) {
  let obj2;
  const intl = intl2.intl;
  const formatToPlainString = intl.formatToPlainString;
  const obj = { date: obj2.format("LLL") };
  const prop = _modDef3865["/spQzC"];
  obj2 = _modDef2044(publishedAt);
  return formatToPlainString(prop, obj);
}
export function useConjurePublishHistory(projectId) {
  let arr;
  let historyLoad;
  let nextCursor;
  _require = projectId;
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
  let items = [projectId, atResult];
  const callback = obj.useCallback(() => {
    const obj = conjurePublishHistoryRequests;
    return obj.fetchPublishHistory(projectId, dependencyMap);
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
}
export function useConjurePublishHistoryNotes(projectId, id, notesCache) {
  _require = projectId;
  let closure_1 = id;
  dependencyMap = notesCache;
  const combined = "" + projectId + "/" + id;
  const items = [projectId, id, notesCache, combined];
  const callback = react.useCallback(() => {
    let obj = notesCache;
    const value = notesCache.get(combined);
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
        const publishHistoryNotes = obj2.fetchPublishHistoryNotes(projectId, id);
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
  let state = notesCache.get(combined);
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
}
