// Module ID: 1317
// Function ID: 1318
// Dependencies: [1309, 1318]

// Module 1317
import _mod1309 from "module_1309" /* 1309 */;
import callBindBasic from "callBindBasic" /* 1318 */;

let getDunder;
let tmp;
try {
  let tmp2 = globalThis;
  const _Array = Array;
  tmp = [].__proto__ === Array.prototype;
} catch (tmp3) {
  throw tmp3;
}
let tmp4 = tmp && _mod1309;
if (tmp4) {
  const _Object = Object;
  tmp4 = _mod1309(Object.prototype, "__proto__");
}
if (tmp4) {
  if (typeof tmp4.get === "function") {
    const items = [tmp4.get];
    getDunder = callBindBasic(items);
  }
  module.exports = getDunder;
}
getDunder = typeof getPrototypeOf === "function";
if (typeof getPrototypeOf === "function") {
  getDunder = function getDunder(arg0) {
    let tmp2 = arg0;
    const tmp = getPrototypeOf;
    if (null != arg0) {
      tmp2 = Object(arg0);
    }
    return tmp(tmp2);
  };
}
