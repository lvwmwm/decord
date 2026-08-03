// Module ID: 13506
// Function ID: 13507
// Name: all
// Dependencies: [13470, 13444]

// Module 13506 (all)
import all from "all";

let _moduleResult = all(require("module_13444").WeakMap);
if (_moduleResult) {
  const _String = String;
  _moduleResult = /native code/.test(String(require("module_13444").WeakMap));
  const obj = /native code/;
}

export default _moduleResult;
