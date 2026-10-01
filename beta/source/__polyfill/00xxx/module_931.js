// Module ID: 931
// Function ID: 932
// Dependencies: [682, 904]
// Exports: addHistoryInstrumentationHandler

// Module 931
import _mod682 from "module_682" /* 682 */;
import _mod904 from "module_904" /* 904 */;

let href;

function instrumentHistory() {
  let tmp = require;
  let tmp2 = dependencyMap;
  const WINDOW = _mod904.WINDOW;
  const listener = WINDOW.addEventListener("popstate", () => {
    href = _mod904.WINDOW.location.href;
    const tmp = require;
    const tmp2 = dependencyMap;
    if (href !== href) {
      const obj = { from: tmp3, to: href };
      const tmpResult = tmp(tmp2[0]);
      tmpResult.triggerHandlers("history", obj);
    }
  });
  let obj = _mod682;
  if (obj.supportsHistory()) {
    function historyReplacementFunction(arg0) {
      let closure_0 = arg0;
      return function() {
        function getAbsoluteUrl(arg0) {
          try {
            const _URL = URL;
            const self = this;
            const self2 = this;
            const str = new URL(arg0, closure_1_0(closure_1_1[1]).WINDOW.location.origin);
            return str.toString();
          } catch (err) {
            return arg0;
          }
        }
        const items = [...arguments];
        let tmp;
        if (items.length > 2) {
          tmp = items[2];
        }
        let self = this;
        if (tmp) {
          const _String = String;
          const tmp4 = getAbsoluteUrl(String(tmp));
          const tmp2 = href;
          href = tmp4;
          if (href === tmp4) {
            return closure_0.apply(self, items);
          } else {
            let str = "history";
            const obj = { from: tmp2, to: tmp4 };
            const obj2 = _mod682;
            obj2.triggerHandlers("history", obj);
          }
        }
        return closure_0.apply(self, items);
      };
    }
    let tmpResult = _mod682;
    let str = "pushState";
    tmpResult.fill(_mod904.WINDOW.history, "pushState", historyReplacementFunction);
    const tmpResult2 = _mod682;
    tmpResult2.fill(_mod904.WINDOW.history, "replaceState", historyReplacementFunction);
  }
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const addHistoryInstrumentationHandler = function addHistoryInstrumentationHandler(arg0) {
  const obj = _mod682;
  obj.addHandler("history", arg0);
  const obj2 = _mod682;
  obj2.maybeInstrument("history", instrumentHistory);
};
export { instrumentHistory };
