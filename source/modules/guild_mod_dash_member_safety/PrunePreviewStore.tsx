// Module ID: 15302
// Function ID: 116697
// Name: getPrunePreviewKey
// Dependencies: [57, 621, 2]
// Exports: clearAllPrunePreviews, getPrunePreview, setPrunePreview, usePrunePreview

// Module 15302 (getPrunePreviewKey)
import _slicedToArray from "_slicedToArray";
import keys from "keys";

function getPrunePreviewKey(arg0, arg1, arg2) {
  const items = [...arg2];
  const sorted = items.sort();
  return "" + arg0 + ":" + arg1 + ":" + sorted.join(",");
}
function isEntryValid(cachedAt) {
  return Date.now() - cachedAt.cachedAt < c1;
}
let c1 = 3600000;
keys = keys.create((arg0) => {
  let _slicedToArray = arg0;
  return {
    entries: {},
    setPreview(arg0, arg1, arg2, arg3, arg4) {
      const callback = arg3;
      let closure_1 = arg4;
      let closure_2 = outer1_3(arg0, arg1, arg2);
      callback((arg0) => {
        let entries = {};
        const merged = Object.assign(arg0.entries);
        entries = {};
        const timestamp = Date.now();
        entries = Object.entries(entries);
        for (let num = 0; num < entries.length; num = num + 1) {
          let tmp3 = callback;
          let tmp4 = callback(entries[num], 2);
          let tmp5 = tmp4[1];
          let tmp6 = outer2_1;
          if (timestamp - tmp5.cachedAt < outer2_1) {
            entries[tmp4[0]] = tmp5;
          }
        }
        let tmp8 = null == tmp7;
        if (!tmp8) {
          tmp8 = tmp7.count <= callback && !tmp7.isFinished;
          const tmp10 = tmp7.count <= callback && !tmp7.isFinished;
        }
        if (tmp8) {
          const obj = { count: callback, isFinished: closure_1 };
          const _Date = Date;
          obj.cachedAt = Date.now();
          entries[closure_2] = obj;
        }
        return { entries };
      });
    },
    clear() {
      callback({ entries: {} });
    }
  };
});
const result = require("set").fileFinishedImporting("modules/guild_mod_dash_member_safety/PrunePreviewStore.tsx");

export const CACHE_TTL_MS = 3600000;
export { getPrunePreviewKey };
export const usePrunePreviewStore = keys;
export const setPrunePreview = function setPrunePreview(arg0, arg1, arg2, arg3, arg4) {
  const state = keys.getState();
  state.setPreview(arg0, arg1, arg2, arg3, arg4);
};
export const clearAllPrunePreviews = function clearAllPrunePreviews() {
  const state = keys.getState();
  state.clear();
};
export const usePrunePreview = function usePrunePreview(arg0, arg1, arg2) {
  let _slicedToArray = arg0;
  let closure_1 = arg1;
  const keys = arg2;
  let tmp = keys((arg0) => {
    const tmp = arg0.entries[outer1_3(undefined, _slicedToArray, closure_1, closure_2)];
    let tmp2 = null;
    if (null != tmp) {
      tmp2 = null;
      if (outer1_4(tmp)) {
        tmp2 = tmp;
      }
    }
    return tmp2;
  });
  const obj = {};
  let count;
  if (null != tmp) {
    count = tmp.count;
  }
  obj.count = count;
  let isFinished;
  if (null != tmp) {
    isFinished = tmp.isFinished;
  }
  obj.isLoading = false === isFinished;
  return obj;
};
export const getPrunePreview = function getPrunePreview(arg0, arg1, arg2) {
  const state = keys.getState();
  const tmp2 = state.entries[getPrunePreviewKey(undefined, arg0, arg1, arg2)];
  let count = null;
  if (null != tmp2) {
    count = null;
    if (isEntryValid(tmp2)) {
      count = tmp2.count;
    }
  }
  return count;
};
