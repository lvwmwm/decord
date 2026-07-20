// Module ID: 15168
// Function ID: 114426
// Name: getPrunePreviewKey
// Dependencies: []
// Exports: clearAllPrunePreviews, getPrunePreview, setPrunePreview, usePrunePreview

// Module 15168 (getPrunePreviewKey)
function getPrunePreviewKey(arg0, arg1, arg2) {
  const items = [...arg2];
  const sorted = items.sort();
  return "" + arg0 + ":" + arg1 + ":" + sorted.join(",");
}
function isEntryValid(cachedAt) {
  return Date.now() - cachedAt.cachedAt < closure_1;
}
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = 3600000;
let obj = arg1(dependencyMap[1]);
obj = obj.create((arg0) => {
  let closure_0 = arg0;
  return {
    entries: {},
    setPreview(arg0, arg1, arg2, arg3, arg4) {
      arg0 = arg3;
      let closure_2 = callback(arg0, arg1, arg2);
      arg0((arg0) => {
        let entries = {};
        const merged = Object.assign(arg0.entries);
        entries = {};
        const timestamp = Date.now();
        entries = Object.entries(entries);
        for (let num = 0; num < entries.length; num = num + 1) {
          let tmp3 = arg3;
          let tmp4 = arg3(entries[num], 2);
          let tmp5 = tmp4[1];
          let tmp6 = arg4;
          if (timestamp - tmp5.cachedAt < arg4) {
            entries[tmp4[0]] = tmp5;
          }
        }
        let tmp8 = null == tmp7;
        if (!tmp8) {
          tmp8 = tmp7.count <= arg3 && !tmp7.isFinished;
          const tmp10 = tmp7.count <= arg3 && !tmp7.isFinished;
        }
        if (tmp8) {
          const obj = { count: arg3, isFinished: arg4 };
          const _Date = Date;
          obj.cachedAt = Date.now();
          entries[closure_2] = obj;
        }
        return { entries };
      });
    },
    clear() {
      arg0({ entries: {} });
    }
  };
});
const result = arg1(dependencyMap[2]).fileFinishedImporting("modules/guild_mod_dash_member_safety/PrunePreviewStore.tsx");

export const CACHE_TTL_MS = 3600000;
export { getPrunePreviewKey };
export const usePrunePreviewStore = obj;
export const setPrunePreview = function setPrunePreview(arg0, arg1, arg2, arg3, arg4) {
  const state = obj.getState();
  state.setPreview(arg0, arg1, arg2, arg3, arg4);
};
export const clearAllPrunePreviews = function clearAllPrunePreviews() {
  const state = obj.getState();
  state.clear();
};
export const usePrunePreview = function usePrunePreview(arg0, arg1, arg2) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  let obj = arg2;
  const tmp = obj((arg0) => {
    let tmp2 = null;
    if (null != arg0.entries[closure_3(undefined, closure_0, closure_1, closure_2)]) {
      tmp2 = null;
      if (callback(tmp)) {
        tmp2 = tmp;
      }
    }
    return tmp2;
  });
  obj = {};
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
  const state = obj.getState();
  let count = null;
  if (null != state.entries[closure_3(undefined, arg0, arg1, arg2)]) {
    count = null;
    if (isEntryValid(tmp2)) {
      count = tmp2.count;
    }
  }
  return count;
};
