// Module ID: 1042
// Function ID: 11205
// Name: instrumentHistory
// Dependencies: [794, 1015]

// Module 1042 (instrumentHistory)
const require = arg1;
const dependencyMap = arg6;
function instrumentHistory() {
  function historyReplacementFunction(arg0) {
    let closure_0 = arg0;
    return function() {
      const self = this;
      const length = arguments.length;
      const arr = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        arr[num] = arguments[num];
      }
      let tmp;
      if (arr.length > 2) {
        tmp = arr[2];
      }
      if (tmp) {
        const _String = String;
        const StringResult = String(tmp);
        const _URL = URL;
        let str = new URL(StringResult, outer2_0(outer2_1[1]).WINDOW.location.origin);
        str = str.toString();
        while (true) {
          let outer2_2 = str;
          if (tmp2 === str) {
            let tmp16 = callback;
            return callback.apply(self, arr);
          } else {
            let obj = { from: tmp2, to: str };
            let tmp13 = outer2_0;
            let tmp14 = outer2_1;
            let obj2 = outer2_0(outer2_1[0]);
            let str2 = "history";
            let triggerHandlersResult = obj2.triggerHandlers("history", obj);
          }
        }
      }
      return callback.apply(self, arr);
    };
  }
  const WINDOW = require(1015) /* WINDOW */.WINDOW;
  const listener = WINDOW.addEventListener("popstate", () => {
    const href = outer1_0(outer1_1[1]).WINDOW.location.href;
    const outer1_2 = href;
    if (outer1_2 !== href) {
      const obj = { from: tmp, to: href };
      outer1_0(outer1_1[0]).triggerHandlers("history", obj);
      const obj2 = outer1_0(outer1_1[0]);
    }
  });
  if (obj.supportsHistory()) {
    require(794) /* registerSpanErrorInstrumentation */.fill(require(1015) /* WINDOW */.WINDOW.history, "pushState", historyReplacementFunction);
    let obj2 = require(794) /* registerSpanErrorInstrumentation */;
    require(794) /* registerSpanErrorInstrumentation */.fill(require(1015) /* WINDOW */.WINDOW.history, "replaceState", historyReplacementFunction);
    const obj3 = require(794) /* registerSpanErrorInstrumentation */;
  }
}
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.addHistoryInstrumentationHandler = function addHistoryInstrumentationHandler(arg0) {
  require(794) /* registerSpanErrorInstrumentation */.addHandler("history", arg0);
  const obj = require(794) /* registerSpanErrorInstrumentation */;
  require(794) /* registerSpanErrorInstrumentation */.maybeInstrument("history", instrumentHistory);
};
arg5.instrumentHistory = instrumentHistory;
