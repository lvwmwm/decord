// Module ID: 7349
// Function ID: 59265
// Name: callFrameToStackFrame
// Dependencies: []

// Module 7349 (callFrameToStackFrame)
arg5.callFrameToStackFrame = function callFrameToStackFrame(location, str) {
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
  let obj = str(arg6[0]);
  obj = { filename: replaced, module: arg2(replaced) };
  let UNKNOWN_FUNCTION = location.functionName;
  if (!UNKNOWN_FUNCTION) {
    UNKNOWN_FUNCTION = str(arg6[1]).UNKNOWN_FUNCTION;
  }
  obj.function = UNKNOWN_FUNCTION;
  obj.colno = sum;
  obj.lineno = sum1;
  let filenameIsInAppResult;
  if (replaced) {
    filenameIsInAppResult = str(arg6[2]).filenameIsInApp(replaced);
    const obj3 = str(arg6[2]);
  }
  obj.in_app = filenameIsInAppResult;
  return obj.dropUndefinedKeys(obj);
};
arg5.watchdogTimer = function watchdogTimer(arg0, arg1, arg2, arg3) {
  const arg6 = arg2;
  let closure_3 = arg0();
  let closure_4 = false;
  let closure_5 = true;
  const timerId = setInterval(() => {
    const timeMs = navigation.getTimeMs();
    let tmp2 = false === closure_4;
    if (tmp2) {
      tmp2 = timeMs > arg1 + arg2;
    }
    if (tmp2) {
      closure_4 = true;
      if (closure_5) {
        arg3();
      }
    }
    if (timeMs < arg1 + arg2) {
      closure_4 = false;
    }
  }, 20);
  return {
    poll() {
      navigation.reset();
    },
    enabled(arg0) {
      let closure_5 = arg0;
    }
  };
};
