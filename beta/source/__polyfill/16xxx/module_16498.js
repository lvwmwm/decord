// Module ID: 16498
// Function ID: 16499
// Dependencies: [16489, 16499, 16497, 16500]

// Module 16498
import _mod16489 from "module_16489" /* 16489 */;
import _mod16497 from "module_16497" /* 16497 */;
import _mod16499 from "module_16499" /* 16499 */;

let tmp;
const _mod16500 = tmp(16500);

export default _mod16489 ? ((arg0) => typeof arg0 === "symbol") : ((arg0) => {
  const tmp3 = _mod16499("Symbol");
  let tmpResultResult = _mod16497(tmp3);
  if (tmpResultResult) {
    const tmpResult = _mod16500;
    tmpResultResult = tmpResult(tmp3.prototype, Object(arg0));
  }
  return tmpResultResult;
});
