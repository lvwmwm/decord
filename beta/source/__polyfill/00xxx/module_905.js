// Module ID: 905
// Function ID: 906
// Dependencies: [904, 906, 907]
// Exports: getVisibilityWatcher

// Module 905
import _mod906 from "module_906" /* 906 */;

const require = globalThis.__r;
let _require;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let num2 = -1;
const set = new Set();
function onVisibilityUpdate(type) {
  function isPageHidden(type) {
    let tmp = "pagehide" === type.type;
    if (!tmp) {
      const _document = require("module_904").WINDOW.document;
      let visibilityState;
      if (_document != null) {
        visibilityState = _document.visibilityState;
      }
      tmp = "hidden" === visibilityState;
    }
    return tmp;
  }
  if (isPageHidden(type)) {
    let tmp = num2;
    if (num2 > -1) {
      if ("visibilitychange" === type.type) {
        for (const item10012 of set) {
          let item10012Result = item10012();
          continue;
        }
      }
      const _isFinite = isFinite;
      if (!isFinite(num2)) {
        num2 = 0;
        if ("visibilitychange" === type.type) {
          num2 = type.timeStamp;
        }
        const obj = _mod906;
        obj.removePageListener("prerenderingchange", onVisibilityUpdate, true);
      }
    }
  }
}

export const getVisibilityWatcher = () => {
  let closure_0;
  const tmp = _require;
  if (require("module_904").WINDOW.document) {
    if (num2 < 0) {
      const tmpResult = tmp(907);
      _require = tmpResult.getActivationStart();
      let tmp8;
      if (!tmp(904).WINDOW.document.prerendering) {
        const _globalThis = globalThis;
        const _performance = performance;
        const entriesByType = _performance.getEntriesByType("visibility-state");
        const first = entriesByType.filter((name) => "hidden" === name.name && name.startTime > closure_0)[0];
        let startTime;
        if (first != null) {
          startTime = first.startTime;
        }
        tmp8 = startTime;
      }
      if (tmp8 == null) {
        const _document = tmp(904).WINDOW.document;
        let visibilityState;
        if (_document != null) {
          visibilityState = _document.visibilityState;
        }
        if ("hidden" !== visibilityState) {
          num2 = Infinity;
        } else {
          const _document2 = tmp(904).WINDOW.document;
          let prerendering;
          if (_document2 != null) {
            prerendering = _document2.prerendering;
          }
          num2 = 0;
        }
        tmp8 = num2;
      }
      num2 = tmp8;
      const tmpResult4 = tmp(906);
      tmpResult4.addPageListener("visibilitychange", onVisibilityUpdate, true);
      const tmpResult5 = tmp(906);
      tmpResult5.addPageListener("pagehide", onVisibilityUpdate, true);
      const tmpResult6 = tmp(906);
      tmpResult6.addPageListener("prerenderingchange", onVisibilityUpdate, true);
    }
  }
  const obj = {
    onHidden(arg0) {
      set.add(arg0);
    }
  };
  Object.defineProperty(obj, "firstHiddenTime", { get: () => num2, set: undefined });
  return obj;
};
