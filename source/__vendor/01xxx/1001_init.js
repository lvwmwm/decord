// Module ID: 1001
// Function ID: 1002
// Name: init
// Dependencies: [19, 682, 889]
// Exports: init

// Module 1001 (init)
import registerSpanErrorInstrumentation from "registerSpanErrorInstrumentation" /* 682 */;
import feedbackAsyncIntegration from "feedbackAsyncIntegration" /* 889 */;
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
