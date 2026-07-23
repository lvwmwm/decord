// Module ID: 69
// Function ID: 1449
// Name: isEnabled
// Dependencies: []

// Module 69 (isEnabled)
const global = arg0;
function isEnabled() {
  if (global.nativeTraceIsTracing) {
    let nativeTraceIsTracingResult = global.nativeTraceIsTracing(c1);
  } else {
    const _Boolean = Boolean;
    nativeTraceIsTracingResult = Boolean(global.__RCTProfileIsProfiling);
  }
  return nativeTraceIsTracingResult;
}
let c1 = 8192;
let c2 = 0;
arg5.isEnabled = isEnabled;
arg5.setEnabled = function setEnabled(arg0) {

};
arg5.beginEvent = function beginEvent(arg0) {
  if (isEnabled()) {
    let tmp = arg0;
    if ("function" === typeof arg0) {
      tmp = arg0();
    }
    const result = global.nativeTraceBeginSection(c1, tmp, arg1);
  }
};
arg5.endEvent = function endEvent(arg0) {
  if (isEnabled()) {
    const result = global.nativeTraceEndSection(c1, arg0);
  }
};
arg5.beginAsyncEvent = function beginAsyncEvent(arg0) {
  if (isEnabled()) {
    closure_2 = closure_2 + 1;
    let tmp3 = arg0;
    if ("function" === typeof arg0) {
      tmp3 = arg0();
    }
    const result = global.nativeTraceBeginAsyncSection(c1, tmp3, tmp, arg1);
  }
  return closure_2;
};
arg5.endAsyncEvent = function endAsyncEvent(arg0, arg1) {
  if (isEnabled()) {
    let tmp = arg0;
    if ("function" === typeof arg0) {
      tmp = arg0();
    }
    const result = global.nativeTraceEndAsyncSection(c1, tmp, arg1, arg2);
  }
};
arg5.counterEvent = function counterEvent(pending_js_to_native_queue, length) {
  if (isEnabled()) {
    let tmp = pending_js_to_native_queue;
    if ("function" === typeof pending_js_to_native_queue) {
      tmp = pending_js_to_native_queue();
    }
    if (global.nativeTraceCounter) {
      global.nativeTraceCounter(c1, tmp, length);
    }
  }
};
