// Module ID: 3
// Function ID: 107
// Name: timestamp
// Dependencies: []

// Module 3 (timestamp)
const timestamp = Date.now();
const _module = require(dependencyMap[0]);
_module.setLogFn((name) => {
  const substr = [...arguments].slice();
  const timestamp = Date.now();
  const result = (timestamp - timestamp) / 1000;
  const result1 = (timestamp - timestamp) / 1000;
  const toFixedResult = result.toFixed(3);
  const toFixedResult1 = result1.toFixed(3);
  const tmp5 = importAll(dependencyMap[1]);
  const items = [{ name, timing: "\u03A3:" + toFixedResult + "s, \u0394:" + toFixedResult1 + "s" }, arg2, ...substr];
  tmp5.report.apply(items);
  const obj = { name, timing: "\u03A3:" + toFixedResult + "s, \u0394:" + toFixedResult1 + "s" };
  const items1 = [name, arg1, arg2, ...substr];
  require(dependencyMap[0]).defaultLogFn.apply(items1);
});
const _module1 = require(dependencyMap[2]);
const result = _module1.fileFinishedImporting("modules/debug/Logger.tsx");

export default require(dependencyMap[0]).Logger;
