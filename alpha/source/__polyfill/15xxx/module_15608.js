// Module ID: 15608
// Function ID: 15609
// Dependencies: [15599, 15609, 15607, 15610]

// Module 15608
import _mod15599 from "module_15599" /* 15599 */;
import _mod15607 from "module_15607" /* 15607 */;
import _mod15609 from "module_15609" /* 15609 */;

let tmp;
const _mod15610 = tmp(15610);

export default _mod15599 ? ((arg0) => typeof arg0 === "symbol") : ((arg0) => {
  const tmp3 = _mod15609("Symbol");
  let tmpResultResult = _mod15607(tmp3);
  if (tmpResultResult) {
    const tmpResult = _mod15610;
    tmpResultResult = tmpResult(tmp3.prototype, Object(arg0));
  }
  return tmpResultResult;
});
