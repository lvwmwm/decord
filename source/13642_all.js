// Module ID: 13642
// Function ID: 13643
// Name: all
// Dependencies: [13606, 13580]

// Module 13642 (all)
import all from "all";

let _moduleResult = all(require("module_13580").WeakMap);
if (_moduleResult) {
  const _String = String;
  _moduleResult = /native code/.test(String(require("module_13580").WeakMap));
  const obj = /native code/;
}

export default _moduleResult;
