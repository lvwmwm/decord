// Module ID: 10758
// Function ID: 10759
// Name: conjurePreviewCall
// Dependencies: [2]
// Exports: controlAnswerTimeoutMs, isResultEnvelope, previewCallTypes

// Module 10758 (conjurePreviewCall)
import size from "module_2" /* 2 */;

let closure_0 = ["conjure-", "vibegrations-"];
class PreviewFrameCallTimeout extends Error {
  constructor(c0, timeoutMs) {
    const tmp2 = new tmp("preview frame did not answer " + c0 + " within " + timeoutMs + "ms", " within ");
    tmp2.name = "PreviewFrameCallTimeout";
    return tmp2;
  }
}
const result = size.fileFinishedImporting("modules/conjure/preview/conjurePreviewCall.tsx");

export const previewCallTypes = function previewCallTypes(arg0) {
  closure_0 = arg0;
  const mapped = closure_0.map((item) => "" + item + closure_0);
  const obj = { requests: mapped, results: mapped.map((item) => "" + item + "-result"), acks: mapped.map((item) => "" + item + "-ack") };
  return obj;
};
export const isResultEnvelope = function isResultEnvelope(parsed, acks, id) {
  if (typeof parsed === "object") {
    if (null != parsed) {
      const type = parsed.type;
      let hasItem = typeof type === "string";
      if (typeof type === "string") {
        hasItem = acks.includes(parsed.type);
      }
      if (hasItem) {
        hasItem = parsed.id === id;
      }
      return hasItem;
    }
  }
  return false;
};
export { PreviewFrameCallTimeout };
export const controlAnswerTimeoutMs = function controlAnswerTimeoutMs(timeoutMs) {
  timeoutMs = timeoutMs.timeoutMs;
  let num = 20000;
  if (typeof timeoutMs === "number") {
    const _isFinite = isFinite;
    num = 20000;
    if (isFinite(timeoutMs)) {
      num = 20000;
      if (timeoutMs > 0) {
        const _Math = Math;
        const _Math2 = Math;
        num = Math.min(Math.floor(timeoutMs), 20000);
      }
    }
  }
  return num + 4000;
};
export const PREVIEW_FRAME_WAIT_MS = 6000;
export const CONTROL_RETRY_MS = 400;
export const CONTROL_END_TIMEOUT_MS = 2000;
export const CAPTURE_NOW_TIMEOUT_MS = 15000;
export const NATIVE_CAPTURE_WAIT_MS = 3000;
export const CAPTURE_NOW_RETRY_MS = 400;
export const INSPECT_TIMEOUT_MS = 1500;
export const INSPECT_ANSWER_TIMEOUT_MS = 5500;
