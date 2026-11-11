// Module ID: 9849
// Function ID: 9850
// Dependencies: [9737, 9734, 9847]
// Exports: callFrameToStackFrame, watchdogTimer

// Module 9849
import _mod9734 from "module_9734" /* 9734 */;
import _mod9737 from "module_9737" /* 9737 */;
import _mod9847 from "module_9847" /* 9847 */;

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
  const tmp6 = _mod9737;
  const dropUndefinedKeys = tmp6.dropUndefinedKeys;
  const obj = { filename: replaced, module: fn(replaced), function: location.functionName || _mod9734.UNKNOWN_FUNCTION, colno: sum, lineno: sum1, in_app: filenameIsInAppResult };
  filenameIsInAppResult = undefined;
  location.functionName || _mod9734.UNKNOWN_FUNCTION;
  if (replaced) {
    const tmp4Result = _mod9847;
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
