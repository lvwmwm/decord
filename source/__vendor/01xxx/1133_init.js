// Module ID: 1133
// Function ID: 1134
// Name: init
// Dependencies: [19, 814, 1021]
// Exports: init

// Module 1133 (init)
import registerSpanErrorInstrumentation from "registerSpanErrorInstrumentation" /* 814 */;
import feedbackAsyncIntegration from "feedbackAsyncIntegration" /* 1021 */;
import closure_2 from "noop" /* 19 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const init = function init(arg0) {
  let obj = {};
  const merged = Object.assign(arg0);
  registerSpanErrorInstrumentation.applySdkMetadata(obj, "react");
  const obj2 = registerSpanErrorInstrumentation;
  obj = { version: version.version };
  feedbackAsyncIntegration.setContext("react", obj);
  const obj3 = feedbackAsyncIntegration;
  return feedbackAsyncIntegration.init(obj);
};
