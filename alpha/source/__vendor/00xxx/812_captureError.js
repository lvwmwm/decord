// Module ID: 812
// Function ID: 813
// Name: captureError
// Dependencies: [712, 683, 704, 733]
// Exports: captureError

// Module 812 (captureError)
import TRACE_FLAG_NONE from "TRACE_FLAG_NONE" /* 683 */;
import SPAN_STATUS_ERROR from "SPAN_STATUS_ERROR" /* 704 */;
import _mod712 from "module_712" /* 712 */;
import _mod733 from "module_733" /* 733 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export function captureError(error, prompt_execution, arg2) {
  let obj4;
  let obj5;
  try {
    const obj = _mod712;
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
      const captureException = _mod733.captureException;
      _mod733;
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
}
