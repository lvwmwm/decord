// Module ID: 923
// Function ID: 10071
// Name: captureError
// Dependencies: [825, 796, 817, 845]

// Module 923 (captureError)
const require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.captureError = function captureError(error, prompt_execution, arg2) {
  let obj = require(825) /* getCurrentScope */;
  if (obj.getClient()) {
    let obj1 = require(796) /* convertSpanLinksForEnvelope */;
    const activeSpan = obj1.getActiveSpan();
    let obj2 = activeSpan;
    let isRecordingResult = tmp5;
    if (null != activeSpan) {
      isRecordingResult = obj2.isRecording();
    }
    if (isRecordingResult) {
      obj = { code: require(817) /* getSpanStatusFromHttpCode */.SPAN_STATUS_ERROR, message: "internal_error" };
      obj2.setStatus(obj);
    }
    obj = {};
    obj1 = { type: "auto.ai.mcp_server", handled: false };
    obj2 = {};
    let str2 = prompt_execution;
    if (!prompt_execution) {
      str2 = "handler_execution";
    }
    obj2.error_type = str2;
    obj1.data = Object.assign(obj2, arg2);
    obj.mechanism = obj1;
    require(845) /* captureCheckIn */.captureException(error, obj);
    const obj5 = require(845) /* captureCheckIn */;
  }
};
