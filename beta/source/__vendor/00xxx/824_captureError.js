// Module ID: 824
// Function ID: 825
// Name: captureError
// Dependencies: [725, 696, 717, 746]
// Exports: captureError

// Module 824 (captureError)
import TRACE_FLAG_NONE from "TRACE_FLAG_NONE" /* 696 */;
import SPAN_STATUS_ERROR from "SPAN_STATUS_ERROR" /* 717 */;
import _mod725 from "module_725" /* 725 */;
import _mod746 from "module_746" /* 746 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const captureError = function captureError(error, prompt_execution, arg2) {
  let obj4;
  let obj5;
  try {
    const obj = _mod725;
    if (obj.getClient()) {
      const tmpResult = TRACE_FLAG_NONE;
      const activeSpan = tmpResult.getActiveSpan();
      let isRecordingResult;
      const tmp3 = activeSpan;
      if (activeSpan != null) {
        isRecordingResult = activeSpan.isRecording();
      }
      if (isRecordingResult) {
        const setStatus = tmp3.setStatus;
        const obj2 = { code: SPAN_STATUS_ERROR.SPAN_STATUS_ERROR, message: "internal_error" };
        setStatus(obj2);
      }
      let str = prompt_execution;
      const captureException = _mod746.captureException;
      _mod746;
      if (!prompt_execution) {
        str = "handler_execution";
      }
      const obj3 = { mechanism: obj4 };
      obj4 = { type: "auto.ai.mcp_server", handled: false, data: obj5 };
      obj5 = { error_type: str };
      const merged = Object.assign(arg2);
      captureException(error, obj3);
    }
  } catch (err) {
  }
};
