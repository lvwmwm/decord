// Module ID: 923
// Function ID: 10065
// Name: captureError
// Dependencies: []

// Module 923 (captureError)
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.captureError = function captureError(error, prompt_execution, arg2) {
  let obj = prompt_execution(arg6[0]);
  if (obj.getClient()) {
    let obj1 = prompt_execution(arg6[1]);
    const activeSpan = obj1.getActiveSpan();
    let obj2 = activeSpan;
    let isRecordingResult = tmp5;
    if (null != activeSpan) {
      isRecordingResult = obj2.isRecording();
    }
    if (isRecordingResult) {
      obj = { code: prompt_execution(arg6[2]).SPAN_STATUS_ERROR, message: "internal_error" };
      obj2.setStatus(obj);
    }
    obj = {};
    obj1 = { "Null": false, "Null": false };
    obj2 = {};
    let str2 = prompt_execution;
    if (!prompt_execution) {
      str2 = "handler_execution";
    }
    obj2.error_type = str2;
    obj1.data = Object.assign(obj2, arg2);
    obj.mechanism = obj1;
    prompt_execution(arg6[3]).captureException(error, obj);
    const obj5 = prompt_execution(arg6[3]);
  }
};
