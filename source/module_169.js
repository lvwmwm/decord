// Module ID: 169
// Function ID: 2515
// Dependencies: []

// Module 169
if (null != global) {
  const _HermesInternal = global.HermesInternal;
}
const _module = require(dependencyMap[0]);
_module.polyfillGlobal("Promise", () => require(dependencyMap[1]).default);
