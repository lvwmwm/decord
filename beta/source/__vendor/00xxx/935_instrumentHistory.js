// Module ID: 935
// Function ID: 936
// Name: instrumentHistory
// Dependencies: [686, 908]
// Exports: addHistoryInstrumentationHandler

// Module 935 (instrumentHistory)
import _mod686 from "module_686" /* 686 */;
import _mod908 from "module_908" /* 908 */;

require = arg1;
const dependencyMap = arg6;
function instrumentHistory() {
  const WINDOW = _mod908.WINDOW;
  const listener = WINDOW.addEventListener("popstate", () => {
    const href = _mod908.WINDOW.location.href;
    closure_2 = href;
    if (closure_2 !== href) {
      const obj = { from: tmp3, to: href };
      _mod686.triggerHandlers("history", obj);
      const tmpResult = _mod686;
    }
  });
  if (obj.supportsHistory()) {
    function historyReplacementFunction(arg0) {
      closure_0 = arg0;
      return function() {
        const items = [...arguments];
        let tmp;
        if (items.length > 2) {
          tmp = items[2];
        }
        const self = this;
        if (tmp) {
          const _String = String;
          const tmp4 = (function getAbsoluteUrl(arg0) {
            try {
              const _URL = URL;
              const str = new URL(arg0, closure_1_0(closure_1_1[1]).WINDOW.location.origin);
              return str.toString();
            } catch (err) {
              return tmp;
            }
          })(String(tmp));
          closure_2 = tmp4;
          if (closure_2 === tmp4) {
            return closure_0.apply(self, items);
          } else {
            const obj = { from: tmp2, to: tmp4 };
            _mod686.triggerHandlers("history", obj);
          }
          tmp2 = closure_2;
        }
        return closure_0.apply(self, items);
      };
    }
    tmp(686).fill(tmp(908).WINDOW.history, "pushState", historyReplacementFunction);
    let tmpResult = tmp(686);
    tmp(686).fill(tmp(908).WINDOW.history, "replaceState", historyReplacementFunction);
    const tmpResult2 = tmp(686);
  }
}
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export const addHistoryInstrumentationHandler = function addHistoryInstrumentationHandler(arg0) {
  _mod686.addHandler("history", arg0);
  _mod686.maybeInstrument("history", instrumentHistory);
};
export { instrumentHistory };
