// Module ID: 13562
// Function ID: 13563
// Name: all
// Dependencies: [13526, 13500]

// Module 13562 (all)
import all from "all";

let _moduleResult = all(require("module_13500").WeakMap);
if (_moduleResult) {
  const _String = String;
  _moduleResult = /native code/.test(String(require("module_13500").WeakMap));
  const obj = /native code/;
}

export default _moduleResult;
