// Module ID: 812
// Function ID: 813
// Name: captureError
// Dependencies: [713, 684, 705, 734]
// Exports: captureError

// Module 812 (captureError)
import _mod713 from "module_713" /* 713 */;

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export const captureError = function captureError(error, prompt_execution, arg2) {
  try {
    if (obj.getClient()) {
      const activeSpan = tmp(684).getActiveSpan();
      let isRecordingResult;
      if (activeSpan != null) {
        isRecordingResult = activeSpan.isRecording();
      }
      if (isRecordingResult) {
        const obj2 = { code: tmp(705).SPAN_STATUS_ERROR, message: "internal_error" };
        obj4.setStatus(obj2);
      }
      let str = prompt_execution;
      obj4 = activeSpan;
      const tmpResult = tmp(684);
      if (!prompt_execution) {
        str = "handler_execution";
      }
      const obj3 = { mechanism: null };
      const obj5 = { type: "auto.ai.mcp_server", handled: false, data: null };
      const obj6 = { error_type: str };
      const merged = Object.assign(arg2);
      obj5.data = obj6;
      obj3.mechanism = obj5;
      tmp(734).captureException(error, obj3);
    }
    obj = _mod713;
  } catch (err) {
  }
};
