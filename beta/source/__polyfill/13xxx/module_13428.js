// Module ID: 13428
// Function ID: 13429
// Dependencies: [13316, 13313, 13426]
// Exports: callFrameToStackFrame, watchdogTimer

// Module 13428
import _mod13313 from "module_13313" /* 13313 */;
import _mod13316 from "module_13316" /* 13316 */;
import _mod13426 from "module_13426" /* 13426 */;

let navigation;


export function callFrameToStackFrame(location, str, fn) {
  let filenameIsInAppResult;
  let replaced;
  if (str) {
    replaced = str.replace(/^file:\/\//, "");
  }
  let sum;
  if (location.location.columnNumber) {
    sum = location.location.columnNumber + 1;
  }
  let sum1;
  if (location.location.lineNumber) {
    sum1 = location.location.lineNumber + 1;
  }
  const tmp6 = _mod13316;
  const dropUndefinedKeys = tmp6.dropUndefinedKeys;
  const obj = { filename: replaced, module: fn(replaced), function: location.functionName || _mod13313.UNKNOWN_FUNCTION, colno: sum, lineno: sum1, in_app: filenameIsInAppResult };
  filenameIsInAppResult = undefined;
  location.functionName || _mod13313.UNKNOWN_FUNCTION;
  if (replaced) {
    const tmp4Result = _mod13426;
    filenameIsInAppResult = tmp4Result.filenameIsInApp(replaced);
  }
  return dropUndefinedKeys(obj);
}
export function watchdogTimer(fn, arg1, arg2, arg3) {
  let closure_0 = arg1;
  let closure_1 = arg2;
  let closure_2 = arg3;
  navigation = fn();
  let c4 = false;
  let c5 = true;
  const timerId = setInterval(() => {
    const timeMs = navigation.getTimeMs();
    const tmp2 = false === c4 && timeMs > closure_0 + closure_1;
    if (tmp2) {
      c4 = true;
      const tmp5 = c5;
      if (tmp5) {
        closure_2();
      }
    }
    if (timeMs < closure_0 + closure_1) {
      c4 = false;
    }
  }, 20);
  return {
    poll() {
      navigation.reset();
    },
    enabled(arg0) {
      c5 = arg0;
    }
  };
}
