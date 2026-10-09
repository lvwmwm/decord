// Module ID: 14205
// Function ID: 14206
// Name: DEFAULT_TOAST_POSITION
// Dependencies: [32, 19, 4771, 558, 576, 4770, 4795, 4789, 2]

// Module 14205 (DEFAULT_TOAST_POSITION)
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer" /* 4789 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import module_4771 from "module_4771" /* 4771 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, set;

let _slicedToArray = _slicedToArray_mod;
const top = "top";
let c5 = 3000;
let closure_6 = module_4771.create(() => {
  const obj = { containerIdsBySurface: new Map() };
  new Map();
  return obj;
});
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_7 = ReactCompilerGating.isReactCompilerEnabled() ? (function useOwnsSurface(arg0, arg1) {
  let closure_0;
  let closure_1;
  _require = arg0;
  dependencyMap = arg1;
  const obj = require("react");
  const cResult = obj.c(7);
  if (cResult[0] === arg1) {
    let tmp2;
    let tmp3;
    if (cResult[1] === arg0) {
      tmp2 = cResult[2];
      tmp3 = cResult[3];
    }
    const effect = react.useEffect(tmp2, tmp3);
    if (cResult[4] === arg1) {
      let tmp6;
      if (cResult[5] === arg0) {
        tmp6 = cResult[6];
      }
      return closure_6(tmp6);
    }
    const fn2 = function l(containerIdsBySurface) {
      containerIdsBySurface = containerIdsBySurface.containerIdsBySurface;
      const value = containerIdsBySurface.get(closure_0);
      return null != value && value[value.length - 1] === closure_1;
    };
    cResult[4] = arg1;
    cResult[5] = arg0;
    cResult[6] = fn2;
    tmp6 = fn2;
  }
  const fn = function o() {
    closure_6.setState((containerIdsBySurface) => {
      containerIdsBySurface = new Map(containerIdsBySurface.containerIdsBySurface);
      set = containerIdsBySurface.set;
      let items1 = containerIdsBySurface.get(closure_1_0);
      const tmp = closure_1_0;
      if (items1 == null) {
        items1 = [];
      }
      const items = [];
      items[HermesBuiltin.arraySpread(items, items1, 0)] = closure_1_1;
      const result = set(tmp, items);
      return { containerIdsBySurface };
    });
    return () => {
      closure_2_6.setState((containerIdsBySurface) => {
        containerIdsBySurface = new Map(containerIdsBySurface.containerIdsBySurface);
        let items = containerIdsBySurface.get(closure_1_0);
        if (items == null) {
          items = [];
        }
        const found = items.filter((item) => item !== closure_1_1);
        if (0 === found.length) {
          containerIdsBySurface.delete(closure_1_0);
        } else {
          const result = containerIdsBySurface.set(tmp, found);
        }
        return { containerIdsBySurface };
      });
    };
  };
  let items = [arg0, arg1];
  cResult[0] = arg1;
  cResult[1] = arg0;
  cResult[2] = fn;
  cResult[3] = items;
  tmp3 = items;
  tmp2 = fn;
}) : (function useOwnsSurface(arg0, arg1) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  let items = [arg0, arg1];
  const effect = react.useEffect(() => {
    closure_6.setState((containerIdsBySurface) => {
      containerIdsBySurface = new Map(containerIdsBySurface.containerIdsBySurface);
      set = containerIdsBySurface.set;
      let items1 = containerIdsBySurface.get(closure_1_0);
      const tmp = closure_1_0;
      if (items1 == null) {
        items1 = [];
      }
      const items = [];
      items[HermesBuiltin.arraySpread(items, items1, 0)] = closure_1_1;
      const result = set(tmp, items);
      return { containerIdsBySurface };
    });
    return () => {
      closure_2_6.setState((containerIdsBySurface) => {
        containerIdsBySurface = new Map(containerIdsBySurface.containerIdsBySurface);
        let items = containerIdsBySurface.get(closure_1_0);
        if (items == null) {
          items = [];
        }
        const found = items.filter((item) => item !== closure_1_1);
        if (0 === found.length) {
          containerIdsBySurface.delete(closure_1_0);
        } else {
          const result = containerIdsBySurface.set(tmp, found);
        }
        return { containerIdsBySurface };
      });
    };
  }, items);
  return closure_6((containerIdsBySurface) => {
    containerIdsBySurface = containerIdsBySurface.containerIdsBySurface;
    const value = containerIdsBySurface.get(closure_0);
    return null != value && value[value.length - 1] === closure_1;
  });
});
const key = 0;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useToastContainer(arg0) {
  let closure_0;
  let first;
  let tmp10;
  let tmp5;
  let toastStore;
  _require = arg0;
  const tmp = _require;
  let tmp2 = toastStore;
  let obj = require("react");
  const cResult = obj.c(13);
  const tmp4 = closure_7(arg0, react.useId());
  if (cResult[0] !== arg0) {
    const fn = function f(currentToastMap) {
      currentToastMap = currentToastMap.currentToastMap;
      return currentToastMap.get(closure_0);
    };
    cResult[0] = arg0;
    cResult[1] = fn;
    tmp5 = fn;
  } else {
    tmp5 = cResult[1];
  }
  toastStore = undefined;
  const tmpResult = tmp(tmp2[5]);
  if (tmp4) {
    toastStore = tmpResult.useToastStore(tmp5);
  }
  if (toastStore == null) {
    toastStore = null;
  }
  [first, tmp10] = react.useState(top);
  let tmp11 = first;
  const tmp7 = top;
  if (null != toastStore) {
    let position = toastStore.toast.position;
    if (position == null) {
      position = tmp7;
    }
    tmp11 = position;
  }
  if (tmp11 !== first) {
    tmp10(tmp11);
  }
  let duration;
  const minToastDurationMs = obj2.useContext(tmp(tmp2[6]).AccessibilityPreferencesContext).minToastDurationMs;
  const _Math = Math;
  if (toastStore != null) {
    duration = toastStore.toast.duration;
  }
  if (duration == null) {
    duration = c5;
  }
  const maxResult = max(duration, minToastDurationMs);
  _slicedToArray = maxResult;
  if (cResult[2] === maxResult) {
    if (cResult[3] === toastStore) {
      let tmp15;
      let tmp16;
      let tmp19;
      let tmp18;
      if (cResult[4] === arg0) {
        tmp15 = cResult[5];
        tmp16 = cResult[6];
      }
      const effect = obj2.useEffect(tmp15, tmp16);
      if (cResult[7] !== toastStore) {
        const fn2 = function x() {
          let text;
          if (toastStore != null) {
            text = tmp.toast.text;
          }
          const tmp2 = null != tmp && tmp.key !== key && null != text && "" !== text;
          if (tmp2) {
            const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
            let str2 = "polite";
            const announce = AccessibilityAnnouncer.announce;
            if ("critical" === toastStore.toast.variant) {
              str2 = "assertive";
            }
            announce(text, str2);
          }
        };
        const items = [toastStore];
        cResult[7] = toastStore;
        cResult[8] = fn2;
        cResult[9] = items;
        tmp19 = items;
        tmp18 = fn2;
      } else {
        tmp18 = cResult[8];
        tmp19 = cResult[9];
      }
      const effect1 = obj2.useEffect(tmp18, tmp19);
      if (cResult[10] === toastStore) {
        let tmp21;
        if (cResult[11] === first) {
          tmp21 = cResult[12];
        }
        return tmp21;
      }
      const obj3 = { entry: toastStore, position: first };
      cResult[10] = toastStore;
      cResult[11] = first;
      cResult[12] = obj3;
      tmp21 = obj3;
    }
  }
  class E {
    constructor() {
      if (null != c1) {
        tmp = globalThis;
        _setTimeout = setTimeout;
        tmp2 = closure_2;
        closure_0 = setTimeout(() => {
          const obj = closure_0(toastStore[5]);
          return obj.popToast(closure_0);
        }, closure_2);
        return () => clearTimeout(closure_0);
      } else {
        return;
      }
    }
  }
  const items1 = [toastStore, maxResult, arg0];
  cResult[2] = maxResult;
  cResult[3] = toastStore;
  cResult[4] = arg0;
  cResult[5] = E;
  cResult[6] = items1;
  tmp16 = items1;
  tmp15 = E;
}) : (function useToastContainer(arg0) {
  let closure_0;
  let entry;
  let position1;
  let tmp8;
  _require = arg0;
  let obj = react;
  const tmp = closure_7(arg0, react.useId());
  let tmp2 = _require;
  const obj2 = require("module_4770");
  const tmp3 = entry;
  entry = undefined;
  if (tmp) {
    entry = obj2.useToastStore((currentToastMap) => {
      currentToastMap = currentToastMap.currentToastMap;
      return currentToastMap.get(closure_0);
    });
  }
  if (entry == null) {
    entry = null;
  }
  [position1, tmp8] = obj.useState(top);
  let tmp9 = position1;
  const tmp5 = top;
  if (null != entry) {
    let position = entry.toast.position;
    if (position == null) {
      position = tmp5;
    }
    tmp9 = position;
  }
  if (tmp9 !== position1) {
    tmp8(tmp9);
  }
  let duration;
  const minToastDurationMs = obj.useContext(tmp2(tmp3[6]).AccessibilityPreferencesContext).minToastDurationMs;
  const _Math = Math;
  if (entry != null) {
    duration = entry.toast.duration;
  }
  if (duration == null) {
    duration = c5;
  }
  const maxResult = max(duration, minToastDurationMs);
  _slicedToArray = maxResult;
  const items = [entry, maxResult, arg0];
  const effect = obj.useEffect(() => {
    if (null != entry) {
      const _setTimeout = setTimeout;
      const timeout = setTimeout(() => {
        const obj = closure_0(entry[5]);
        return obj.popToast(closure_0);
      }, closure_2);
      return () => clearTimeout(closure_0);
    }
  }, items);
  const items1 = [entry];
  const effect1 = obj.useEffect(() => {
    let text;
    if (entry != null) {
      text = tmp.toast.text;
    }
    const tmp2 = null != tmp && tmp.key !== key && null != text && "" !== text;
    if (tmp2) {
      const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
      let str2 = "polite";
      const announce = AccessibilityAnnouncer.announce;
      if ("critical" === entry.toast.variant) {
        str2 = "assertive";
      }
      announce(text, str2);
    }
  }, items1);
  return { entry, position: position1 };
});
let result = size.fileFinishedImporting("../discord_common/js/packages/design/components/Toast/ToastContainerUtils.shared.tsx");

export const DEFAULT_TOAST_POSITION = "top";
export const DEFAULT_TOAST_DURATION_MS = 3000;
export const useToastContainer = tmp2;
