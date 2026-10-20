// Module ID: 15379
// Function ID: 15380
// Dependencies: [15370, 15380, 15378, 15381]

// Module 15379
import _mod15370 from "module_15370" /* 15370 */;
import _mod15378 from "module_15378" /* 15378 */;
import _mod15380 from "module_15380" /* 15380 */;

let tmp;
const _mod15381 = tmp(15381);

export default _mod15370 ? ((arg0) => typeof arg0 === "symbol") : ((arg0) => {
  const tmp3 = _mod15380("Symbol");
  let tmpResultResult = _mod15378(tmp3);
  if (tmpResultResult) {
    const tmpResult = _mod15381;
    tmpResultResult = tmpResult(tmp3.prototype, Object(arg0));
  }
  return tmpResultResult;
});
