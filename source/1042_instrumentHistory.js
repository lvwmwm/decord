// Module ID: 1042
// Function ID: 11204
// Name: instrumentHistory
// Dependencies: []

// Module 1042 (instrumentHistory)
function instrumentHistory() {
  function historyReplacementFunction(arg0) {
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
        let str = new URL(StringResult, arg0(closure_1[1]).WINDOW.location.origin);
        str = str.toString();
        while (true) {
          if (tmp2 === str) {
            let tmp16 = arg0;
            return arg0.apply(self, arr);
          } else {
            let obj = { from: tmp2, to: str };
            let tmp13 = arg0;
            let tmp14 = closure_1;
            let obj2 = arg0(closure_1[0]);
            let str2 = "history";
            let triggerHandlersResult = obj2.triggerHandlers("history", obj);
          }
        }
      }
      return arg0.apply(self, arr);
    };
  }
  const WINDOW = arg1(arg6[1]).WINDOW;
  const listener = WINDOW.addEventListener("popstate", () => {
    const href = callback(closure_1[1]).WINDOW.location.href;
    if (href !== href) {
      const obj = { from: tmp, to: href };
      callback(closure_1[0]).triggerHandlers("history", obj);
      const obj2 = callback(closure_1[0]);
    }
  });
  if (obj.supportsHistory()) {
    arg1(arg6[0]).fill(arg1(arg6[1]).WINDOW.history, "pushState", historyReplacementFunction);
    const obj2 = arg1(arg6[0]);
    arg1(arg6[0]).fill(arg1(arg6[1]).WINDOW.history, "replaceState", historyReplacementFunction);
    const obj3 = arg1(arg6[0]);
  }
}
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.addHistoryInstrumentationHandler = function addHistoryInstrumentationHandler(arg0) {
  arg1(arg6[0]).addHandler("history", arg0);
  const obj = arg1(arg6[0]);
  arg1(arg6[0]).maybeInstrument("history", instrumentHistory);
};
arg5.instrumentHistory = instrumentHistory;
