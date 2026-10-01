// Module ID: 1001
// Function ID: 1002
// Dependencies: [19, 682, 889]
// Exports: init

// Module 1001
import _mod682 from "module_682" /* 682 */;
import feedbackAsyncIntegration from "feedbackAsyncIntegration" /* 889 */;
import react from "react" /* 19 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const init = function init(arg0) {
  const obj = {};
  const merged = Object.assign(arg0);
  const obj2 = _mod682;
  obj2.applySdkMetadata(obj, "react");
  const obj3 = feedbackAsyncIntegration;
  const obj4 = { version: react.version };
  obj3.setContext("react", obj4);
  const obj5 = feedbackAsyncIntegration;
  return obj5.init(obj);
};
