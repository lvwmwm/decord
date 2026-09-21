// Module ID: 1005
// Function ID: 1006
// Dependencies: [19, 686, 893]
// Exports: init

// Module 1005
import _mod686 from "module_686" /* 686 */;
import feedbackAsyncIntegration from "feedbackAsyncIntegration" /* 893 */;
import noop from "module_19" /* 19 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const init = function init(arg0) {
  const obj = {};
  const merged = Object.assign(arg0);
  _mod686.applySdkMetadata(obj, "react");
  feedbackAsyncIntegration.setContext("react", { version: noop.version });
  const obj4 = { version: noop.version };
  return feedbackAsyncIntegration.init(obj);
};
