// Module ID: 13357
// Function ID: 102250
// Name: all
// Dependencies: [13321, 13295]

// Module 13357 (all)
import all from "all";

let _moduleResult = all(require("check").WeakMap);
if (_moduleResult) {
  const _String = String;
  _moduleResult = /native code/.test(String(require("check").WeakMap));
  const obj = /native code/;
}

export default _moduleResult;
