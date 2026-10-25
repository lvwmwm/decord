// Module ID: 15572
// Function ID: 15573
// Dependencies: [15563, 15573, 15571, 15574]

// Module 15572
import _mod15563 from "module_15563" /* 15563 */;
import _mod15571 from "module_15571" /* 15571 */;
import _mod15573 from "module_15573" /* 15573 */;

let tmp;
const _mod15574 = tmp(15574);

export default _mod15563 ? ((arg0) => typeof arg0 === "symbol") : ((arg0) => {
  const tmp3 = _mod15573("Symbol");
  let tmpResultResult = _mod15571(tmp3);
  if (tmpResultResult) {
    const tmpResult = _mod15574;
    tmpResultResult = tmpResult(tmp3.prototype, Object(arg0));
  }
  return tmpResultResult;
});
