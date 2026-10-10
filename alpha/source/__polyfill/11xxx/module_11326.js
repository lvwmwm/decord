// Module ID: 11326
// Function ID: 11327
// Dependencies: [11214, 11211, 11324]
// Exports: callFrameToStackFrame, watchdogTimer

// Module 11326
import _mod11211 from "module_11211" /* 11211 */;
import _mod11214 from "module_11214" /* 11214 */;
import _mod11324 from "module_11324" /* 11324 */;

let navigation;


export const callFrameToStackFrame = function callFrameToStackFrame(location, str, fn) {
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
  const tmp6 = _mod11214;
  const dropUndefinedKeys = tmp6.dropUndefinedKeys;
  const obj = { filename: replaced, module: fn(replaced), function: location.functionName || _mod11211.UNKNOWN_FUNCTION, colno: sum, lineno: sum1, in_app: filenameIsInAppResult };
  filenameIsInAppResult = undefined;
  location.functionName || _mod11211.UNKNOWN_FUNCTION;
  if (replaced) {
    const tmp4Result = _mod11324;
    filenameIsInAppResult = tmp4Result.filenameIsInApp(replaced);
  }
  return dropUndefinedKeys(obj);
};
export const watchdogTimer = function watchdogTimer(fn, arg1, arg2, arg3) {
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
};
