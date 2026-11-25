// Module ID: 15573
// Function ID: 15574
// Dependencies: [15564, 15574, 15572, 15575]

// Module 15573
import _mod15564 from "module_15564" /* 15564 */;
import _mod15572 from "module_15572" /* 15572 */;
import _mod15574 from "module_15574" /* 15574 */;

let tmp;
const _mod15575 = tmp(15575);

export default _mod15564 ? ((arg0) => typeof arg0 === "symbol") : ((arg0) => {
  const tmp3 = _mod15574("Symbol");
  let tmpResultResult = _mod15572(tmp3);
  if (tmpResultResult) {
    const tmpResult = _mod15575;
    tmpResultResult = tmpResult(tmp3.prototype, Object(arg0));
  }
  return tmpResultResult;
});
