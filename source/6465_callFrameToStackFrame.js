// Module ID: 6465
// Function ID: 57870
// Name: callFrameToStackFrame
// Dependencies: [6353, 6350, 6463]

// Module 6465 (callFrameToStackFrame)
const require = arg1;
const dependencyMap = arg6;
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
  let obj = require(6353) /* addNonEnumerableProperty */;
  obj = { filename: replaced, module: arg2(replaced) };
  let UNKNOWN_FUNCTION = location.functionName;
  if (!UNKNOWN_FUNCTION) {
    UNKNOWN_FUNCTION = require(6350) /* createStackParser */.UNKNOWN_FUNCTION;
  }
  obj.function = UNKNOWN_FUNCTION;
  obj.colno = sum;
  obj.lineno = sum1;
  let filenameIsInAppResult;
  if (replaced) {
    filenameIsInAppResult = require(6463) /* filenameIsInApp */.filenameIsInApp(replaced);
    const obj3 = require(6463) /* filenameIsInApp */;
  }
  obj.in_app = filenameIsInAppResult;
  return obj.dropUndefinedKeys(obj);
};
arg5.watchdogTimer = function watchdogTimer(arg0, arg1, arg2, arg3) {
  let closure_0 = arg1;
  let closure_1 = arg2;
  let closure_2 = arg3;
  let closure_3 = arg0();
  let c4 = false;
  let c5 = true;
  const timerId = setInterval(() => {
    const timeMs = navigation.getTimeMs();
    let tmp2 = false === c4;
    if (tmp2) {
      tmp2 = timeMs > closure_0 + closure_1;
    }
    if (tmp2) {
      c4 = true;
      if (c5) {
        callback();
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
      let closure_5 = arg0;
    }
  };
};
