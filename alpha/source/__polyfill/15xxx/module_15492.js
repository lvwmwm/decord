// Module ID: 15492
// Function ID: 15493
// Dependencies: [15483, 15493, 15491, 15494]

// Module 15492
import _mod15483 from "module_15483" /* 15483 */;
import _mod15491 from "module_15491" /* 15491 */;
import _mod15493 from "module_15493" /* 15493 */;

let tmp;
const _mod15494 = tmp(15494);

export default _mod15483 ? ((arg0) => typeof arg0 === "symbol") : ((arg0) => {
  const tmp3 = _mod15493("Symbol");
  let tmpResultResult = _mod15491(tmp3);
  if (tmpResultResult) {
    const tmpResult = _mod15494;
    tmpResultResult = tmpResult(tmp3.prototype, Object(arg0));
  }
  return tmpResultResult;
});
