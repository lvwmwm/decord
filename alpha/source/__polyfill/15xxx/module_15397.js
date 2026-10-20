// Module ID: 15397
// Function ID: 15398
// Dependencies: [15388, 15398, 15396, 15399]

// Module 15397
import _mod15388 from "module_15388" /* 15388 */;
import _mod15396 from "module_15396" /* 15396 */;
import _mod15398 from "module_15398" /* 15398 */;

let tmp;
const _mod15399 = tmp(15399);

export default _mod15388 ? ((arg0) => typeof arg0 === "symbol") : ((arg0) => {
  const tmp3 = _mod15398("Symbol");
  let tmpResultResult = _mod15396(tmp3);
  if (tmpResultResult) {
    const tmpResult = _mod15399;
    tmpResultResult = tmpResult(tmp3.prototype, Object(arg0));
  }
  return tmpResultResult;
});
