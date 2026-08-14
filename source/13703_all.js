// Module ID: 13703
// Function ID: 13704
// Name: all
// Dependencies: [13667, 13641]

// Module 13703 (all)
import all from "all";

let _moduleResult = all(require("module_13641").WeakMap);
if (_moduleResult) {
  const _String = String;
  _moduleResult = /native code/.test(String(require("module_13641").WeakMap));
  const obj = /native code/;
}

export default _moduleResult;
