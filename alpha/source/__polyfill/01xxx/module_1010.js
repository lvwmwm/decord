// Module ID: 1010
// Function ID: 1011
// Dependencies: [19, 693, 898]
// Exports: init

// Module 1010
import _mod693 from "module_693" /* 693 */;
import feedbackAsyncIntegration from "feedbackAsyncIntegration" /* 898 */;
import react from "react" /* 19 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const init = function init(arg0) {
  const obj = {};
  const merged = Object.assign(arg0);
  const obj2 = _mod693;
  obj2.applySdkMetadata(obj, "react");
  const obj3 = feedbackAsyncIntegration;
  const obj4 = { version: react.version };
  obj3.setContext("react", obj4);
  const obj5 = feedbackAsyncIntegration;
  return obj5.init(obj);
};
