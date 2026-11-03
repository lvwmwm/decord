// Module ID: 13308
// Function ID: 13309
// Dependencies: [13196, 13193, 13306]
// Exports: callFrameToStackFrame, watchdogTimer

// Module 13308
import _mod13193 from "module_13193" /* 13193 */;
import _mod13196 from "module_13196" /* 13196 */;
import _mod13306 from "module_13306" /* 13306 */;

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
  const tmp6 = _mod13196;
  const dropUndefinedKeys = tmp6.dropUndefinedKeys;
  const obj = { filename: replaced, module: fn(replaced), function: location.functionName || _mod13193.UNKNOWN_FUNCTION, colno: sum, lineno: sum1, in_app: filenameIsInAppResult };
  filenameIsInAppResult = undefined;
  location.functionName || _mod13193.UNKNOWN_FUNCTION;
  if (replaced) {
    const tmp4Result = _mod13306;
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
