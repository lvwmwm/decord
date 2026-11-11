// Module ID: 16368
// Function ID: 16369
// Name: DEFAULT_TOAST_POSITION
// Dependencies: [32, 19, 5254, 5954, 5257, 5252, 2]
// Exports: useToastContainer

// Module 16368 (DEFAULT_TOAST_POSITION)
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer" /* 5252 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import module_5254 from "module_5254" /* 5254 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, containerIdsBySurface, set;

let _slicedToArray = _slicedToArray_mod;
const top = "top";
let closure_5 = module_5254.create(() => {
  const obj = { containerIdsBySurface: new Map() };
  new Map();
  return obj;
});
const key = 0;
let result = size.fileFinishedImporting("../discord_common/js/packages/design/components/Toast/ToastContainerUtils.shared.tsx");

export const DEFAULT_TOAST_POSITION = "top";
export const DEFAULT_TOAST_DURATION_MS = 3000;
export function useToastContainer(app) {
  let entry;
  let position1;
  let tmp10;
  const id = react.useId();
  _require = app;
  let items = [app, id];
  const effect = react.useEffect(() => {
    state.setState((containerIdsBySurface) => {
      containerIdsBySurface = new Map(containerIdsBySurface.containerIdsBySurface);
      set = containerIdsBySurface.set;
      let items1 = containerIdsBySurface.get(closure_1_0);
      const tmp = closure_1_0;
      if (items1 == null) {
        items1 = [];
      }
      const items = [];
      items[HermesBuiltin.arraySpread(items, items1, 0)] = id;
      const result = set(tmp, items);
      return { containerIdsBySurface };
    });
    return () => {
      state.setState((containerIdsBySurface) => {
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
  let tmp3 = state((containerIdsBySurface) => {
    containerIdsBySurface = containerIdsBySurface.containerIdsBySurface;
    const value = containerIdsBySurface.get(closure_0);
    return null != value && value[value.length - 1] === id;
  });
  const obj2 = require("module_5954");
  const tmp5 = entry;
  entry = undefined;
  const tmp4 = _require;
  if (tmp3) {
    entry = obj2.useToastStore((currentToastMap) => {
      currentToastMap = currentToastMap.currentToastMap;
      return currentToastMap.get(app);
    });
  }
  if (entry == null) {
    entry = null;
  }
  [position1, tmp10] = react.useState(top);
  let tmp11 = position1;
  const tmp7 = top;
  if (null != entry) {
    let position = entry.toast.position;
    if (position == null) {
      position = tmp7;
    }
    tmp11 = position;
  }
  if (tmp11 !== position1) {
    tmp10(tmp11);
  }
  let num;
  const minToastDurationMs = obj.useContext(tmp4(tmp5[4]).AccessibilityPreferencesContext).minToastDurationMs;
  const _Math = Math;
  if (entry != null) {
    num = entry.toast.duration;
  }
  if (num == null) {
    num = 3000;
  }
  const maxResult = max(num, minToastDurationMs);
  _slicedToArray = maxResult;
  let items1 = [entry, maxResult, app];
  const effect1 = obj.useEffect(() => {
    let closure_0;
    if (null != entry) {
      let tmp = globalThis;
      const _setTimeout = setTimeout;
      let tmp2 = closure_2;
      const timeout = setTimeout(() => {
        const useToastStore = app(entry[3]).useToastStore;
        const currentToastMap = useToastStore.getState().currentToastMap;
        const tmp = app;
        const tmp2 = entry;
        const tmp3 = app;
        if (currentToastMap.get(app) === closure_1_1) {
          const tmpResult = tmp(tmp2[3]);
          tmpResult.popToast(tmp3);
        }
      }, closure_2);
      return () => clearTimeout(closure_0);
    }
  }, items1);
  const items2 = [entry];
  const effect2 = obj.useEffect(() => {
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
  }, items2);
  return { entry, position: position1 };
}
