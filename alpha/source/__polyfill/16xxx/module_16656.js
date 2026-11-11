// Module ID: 16656
// Function ID: 16657
// Dependencies: [16647, 16657, 16655, 16658]

// Module 16656
import _mod16647 from "module_16647" /* 16647 */;
import _mod16655 from "module_16655" /* 16655 */;
import _mod16657 from "module_16657" /* 16657 */;

let tmp;
const _mod16658 = tmp(16658);

export default _mod16647 ? ((arg0) => typeof arg0 === "symbol") : ((arg0) => {
  const tmp3 = _mod16657("Symbol");
  let tmpResultResult = _mod16655(tmp3);
  if (tmpResultResult) {
    const tmpResult = _mod16658;
    tmpResultResult = tmpResult(tmp3.prototype, Object(arg0));
  }
  return tmpResultResult;
});
