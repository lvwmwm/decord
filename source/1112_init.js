// Module ID: 1112
// Function ID: 12666
// Name: init
// Dependencies: [31, 794, 1000]
// Exports: init

// Module 1112 (init)
import result from "result";

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const init = function init(arg0) {
  const merged = Object.assign({}, arg0);
  let obj = require(794) /* registerSpanErrorInstrumentation */;
  obj.applySdkMetadata(merged, "react");
  obj = { version: version.version };
  require(1000) /* keys */.setContext("react", obj);
  const obj2 = require(1000) /* keys */;
  return require(1000) /* keys */.init(merged);
};
