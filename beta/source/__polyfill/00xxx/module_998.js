// Module ID: 998
// Function ID: 999
// Dependencies: [19, 681, 886]
// Exports: init

// Module 998
import _mod681 from "module_681" /* 681 */;
import feedbackAsyncIntegration from "feedbackAsyncIntegration" /* 886 */;
import react from "react" /* 19 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export function init(arg0) {
  const obj = {};
  const merged = Object.assign(arg0);
  const obj2 = _mod681;
  obj2.applySdkMetadata(obj, "react");
  const obj3 = feedbackAsyncIntegration;
  const obj4 = { version: react.version };
  obj3.setContext("react", obj4);
  const obj5 = feedbackAsyncIntegration;
  return obj5.init(obj);
}
