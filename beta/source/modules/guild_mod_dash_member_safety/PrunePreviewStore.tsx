// Module ID: 16226
// Function ID: 16227
// Name: PrunePreviewStore
// Dependencies: [32, 560, 2]
// Exports: clearAllPrunePreviews, getPrunePreview, getPrunePreviewKey, setPrunePreview, usePrunePreview

// Module 16226 (PrunePreviewStore)
import _slicedToArray from "_slicedToArray" /* 32 */;
import module_560 from "module_560" /* 560 */;
import size from "module_2" /* 2 */;

let c1 = 3600000;
const usePrunePreviewStore = module_560.create((arg0) => {
  let closure_0 = arg0;
  let obj = {
    entries: {},
    setPreview(arg0, arg1, arg2, arg3, arg4) {
      closure_0 = arg3;
      let closure_1 = arg4;
      const items = [...arg2];
      const sorted = items.sort();
      let closure_2 = "" + arg0 + ":" + arg1 + ":" + sorted.join(",");
      closure_0((arg0) => {
        let tmp8;
        let tmp9;
        const obj = {};
        const merged = Object.assign(arg0.entries);
        const obj2 = {};
        const timestamp = Date.now();
        const entries = Object.entries(obj);
        const tmp4 = entries[Symbol.iterator]();
        while (tmp4 !== undefined) {
          let tmp7 = closure_2_0(tmp5, 2);
          [tmp8, tmp9] = tmp7;
          if (timestamp - tmp9.cachedAt < closure_2_1) {
            obj2[tmp8] = tmp10;
          }
          continue;
        }
        let tmp16 = null == tmp15;
        const tmp14 = closure_2;
        if (!tmp16) {
          tmp16 = obj2[closure_2].count <= count && !obj2[closure_2].isFinished;
        }
        if (tmp16) {
          const _Date = Date;
          obj2[tmp14] = { count, isFinished, cachedAt: Date.now() };
          const obj3 = { count, isFinished, cachedAt: Date.now() };
        }
        return { entries: obj2 };
      });
    },
    clear() {
      closure_0({ entries: {} });
    }
  };
  return obj;
});
const result = size.fileFinishedImporting("modules/guild_mod_dash_member_safety/PrunePreviewStore.tsx");

export const CACHE_TTL_MS = 3600000;
export const getPrunePreviewKey = function getPrunePreviewKey(arg0, arg1, arg2) {
  const items = [...arg2];
  const sorted = items.sort();
  return "" + arg0 + ":" + arg1 + ":" + sorted.join(",");
};
export { usePrunePreviewStore };
export const setPrunePreview = function setPrunePreview(arg0, arg1, arg2, arg3, arg4) {
  const state = obj.getState();
  state.setPreview(arg0, arg1, arg2, arg3, arg4);
};
export const clearAllPrunePreviews = function clearAllPrunePreviews() {
  const state = obj.getState();
  state.clear();
};
export const usePrunePreview = function usePrunePreview(arg0, arg1, arg2) {
  let isFinished;
  let closure_0 = arg0;
  let closure_1 = arg1;
  const args = arg2;
  let tmp = args((arg0) => {
    const items = [...closure_2];
    const sorted = items.sort();
    const tmp = arg0.entries["" + closure_0 + ":" + closure_1 + ":" + sorted.join(sorted, ",")];
    let tmp2 = null;
    if (null != tmp) {
      const _Date = Date;
      tmp2 = null;
      if (Date.now() - tmp.cachedAt < c1) {
        tmp2 = tmp;
      }
    }
    return tmp2;
  });
  let count;
  if (tmp != null) {
    count = tmp.count;
  }
  const obj = { count, isLoading: false === isFinished };
  isFinished = undefined;
  if (tmp != null) {
    isFinished = tmp.isFinished;
  }
  return obj;
};
export const getPrunePreview = function getPrunePreview(arg0, arg1, arg2) {
  const items = [];
  const state = obj.getState();
  HermesBuiltin.arraySpread(items, arg2, 0);
  const sorted = items.sort();
  const tmp4 = state.entries["" + arg0 + ":" + arg1 + ":" + sorted.join(sorted, ",")];
  let count = null;
  if (null != tmp4) {
    const _Date = Date;
    count = null;
    if (Date.now() - tmp4.cachedAt < c1) {
      count = tmp4.count;
    }
  }
  return count;
};
