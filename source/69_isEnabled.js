// Module ID: 69
// Function ID: 1449
// Name: isEnabled
// Dependencies: []

// Module 69 (isEnabled)
function isEnabled(self) {
  if (self.nativeTraceIsTracing) {
    let nativeTraceIsTracingResult = self.nativeTraceIsTracing(closure_1);
  } else {
    const _Boolean = Boolean;
    nativeTraceIsTracingResult = Boolean(self.__RCTProfileIsProfiling);
  }
  return nativeTraceIsTracingResult;
}
let closure_1 = 8192;
let closure_2 = 0;
arg5.isEnabled = isEnabled;
arg5.setEnabled = function setEnabled(arg0) {

};
arg5.beginEvent = function beginEvent(arg0) {
  if (isEnabled()) {
    let tmp = arg0;
    if ("function" === typeof arg0) {
      tmp = arg0();
    }
    const result = arg0.nativeTraceBeginSection(closure_1, tmp, arg1);
  }
};
arg5.endEvent = function endEvent(arg0) {
  if (isEnabled()) {
    const result = arg0.nativeTraceEndSection(closure_1, arg0);
  }
};
arg5.beginAsyncEvent = function beginAsyncEvent(arg0) {
  if (isEnabled()) {
    closure_2 = closure_2 + 1;
    let tmp3 = arg0;
    if ("function" === typeof arg0) {
      tmp3 = arg0();
    }
    const result = arg0.nativeTraceBeginAsyncSection(closure_1, tmp3, tmp, arg1);
  }
  return closure_2;
};
arg5.endAsyncEvent = function endAsyncEvent(arg0, arg1) {
  if (isEnabled()) {
    let tmp = arg0;
    if ("function" === typeof arg0) {
      tmp = arg0();
    }
    const result = arg0.nativeTraceEndAsyncSection(closure_1, tmp, arg1, arg2);
  }
};
arg5.counterEvent = function counterEvent(pending_js_to_native_queue, length) {
  if (isEnabled()) {
    let tmp = pending_js_to_native_queue;
    if ("function" === typeof pending_js_to_native_queue) {
      tmp = pending_js_to_native_queue();
    }
    if (pending_js_to_native_queue.nativeTraceCounter) {
      pending_js_to_native_queue.nativeTraceCounter(closure_1, tmp, length);
    }
  }
};
