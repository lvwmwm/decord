// Module ID: 15834
// Function ID: 15835
// Dependencies: [15825, 15835, 15833, 15836]

// Module 15834
import _mod15825 from "module_15825" /* 15825 */;
import _mod15833 from "module_15833" /* 15833 */;
import _mod15835 from "module_15835" /* 15835 */;

let tmp;
const _mod15836 = tmp(15836);

export default _mod15825 ? ((arg0) => typeof arg0 === "symbol") : ((arg0) => {
  const tmp3 = _mod15835("Symbol");
  let tmpResultResult = _mod15833(tmp3);
  if (tmpResultResult) {
    const tmpResult = _mod15836;
    tmpResultResult = tmpResult(tmp3.prototype, Object(arg0));
  }
  return tmpResultResult;
});
