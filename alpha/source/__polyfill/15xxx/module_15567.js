// Module ID: 15567
// Function ID: 15568
// Dependencies: [15558, 15568, 15566, 15569]

// Module 15567
import _mod15558 from "module_15558" /* 15558 */;
import _mod15566 from "module_15566" /* 15566 */;
import _mod15568 from "module_15568" /* 15568 */;

let tmp;
const _mod15569 = tmp(15569);

export default _mod15558 ? ((arg0) => typeof arg0 === "symbol") : ((arg0) => {
  const tmp3 = _mod15568("Symbol");
  let tmpResultResult = _mod15566(tmp3);
  if (tmpResultResult) {
    const tmpResult = _mod15569;
    tmpResultResult = tmpResult(tmp3.prototype, Object(arg0));
  }
  return tmpResultResult;
});
