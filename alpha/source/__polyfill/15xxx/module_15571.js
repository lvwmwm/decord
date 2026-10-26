// Module ID: 15571
// Function ID: 15572
// Dependencies: [15562, 15572, 15570, 15573]

// Module 15571
import _mod15562 from "module_15562" /* 15562 */;
import _mod15570 from "module_15570" /* 15570 */;
import _mod15572 from "module_15572" /* 15572 */;

let tmp;
const _mod15573 = tmp(15573);

export default _mod15562 ? ((arg0) => typeof arg0 === "symbol") : ((arg0) => {
  const tmp3 = _mod15572("Symbol");
  let tmpResultResult = _mod15570(tmp3);
  if (tmpResultResult) {
    const tmpResult = _mod15573;
    tmpResultResult = tmpResult(tmp3.prototype, Object(arg0));
  }
  return tmpResultResult;
});
