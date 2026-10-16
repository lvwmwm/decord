// Module ID: 15278
// Function ID: 15279
// Dependencies: [15269, 15279, 15277, 15280]

// Module 15278
import _mod15269 from "module_15269" /* 15269 */;
import _mod15277 from "module_15277" /* 15277 */;
import _mod15279 from "module_15279" /* 15279 */;

let tmp;
const _mod15280 = tmp(15280);

export default _mod15269 ? ((arg0) => typeof arg0 === "symbol") : ((arg0) => {
  const tmp3 = _mod15279("Symbol");
  let tmpResultResult = _mod15277(tmp3);
  if (tmpResultResult) {
    const tmpResult = _mod15280;
    tmpResultResult = tmpResult(tmp3.prototype, Object(arg0));
  }
  return tmpResultResult;
});
