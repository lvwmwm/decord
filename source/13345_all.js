// Module ID: 13345
// Function ID: 102118
// Name: all
// Dependencies: [13309, 13283]

// Module 13345 (all)
import all from "all";

let _moduleResult = all(require("check").WeakMap);
if (_moduleResult) {
  const _String = String;
  _moduleResult = /native code/.test(String(require("check").WeakMap));
  const obj = /native code/;
}

export default _moduleResult;
