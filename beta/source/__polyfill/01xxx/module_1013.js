// Module ID: 1013
// Function ID: 1014
// Dependencies: [19, 694, 901]
// Exports: init

// Module 1013
import _mod694 from "module_694" /* 694 */;
import feedbackAsyncIntegration from "feedbackAsyncIntegration" /* 901 */;
import react from "react" /* 19 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const init = function init(arg0) {
  const obj = {};
  const merged = Object.assign(arg0);
  const obj2 = _mod694;
  obj2.applySdkMetadata(obj, "react");
  const obj3 = feedbackAsyncIntegration;
  const obj4 = { version: react.version };
  obj3.setContext("react", obj4);
  const obj5 = feedbackAsyncIntegration;
  return obj5.init(obj);
};
