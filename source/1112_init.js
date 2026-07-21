// Module ID: 1112
// Function ID: 12665
// Name: init
// Dependencies: []
// Exports: init

// Module 1112 (init)
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let closure_2 = require(dependencyMap[0]);

export const init = function init(arg0) {
  const merged = Object.assign({}, arg0);
  let obj = require(dependencyMap[1]);
  obj.applySdkMetadata(merged, "react");
  obj = { version: version.version };
  require(dependencyMap[2]).setContext("react", obj);
  const obj2 = require(dependencyMap[2]);
  return require(dependencyMap[2]).init(merged);
};
