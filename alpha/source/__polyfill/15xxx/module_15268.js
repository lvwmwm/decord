// Module ID: 15268
// Function ID: 15269
// Dependencies: [15259, 15269, 15267, 15270]

// Module 15268
import _mod15259 from "module_15259" /* 15259 */;
import _mod15267 from "module_15267" /* 15267 */;
import _mod15269 from "module_15269" /* 15269 */;

let tmp;
const _mod15270 = tmp(15270);

export default _mod15259 ? ((arg0) => typeof arg0 === "symbol") : ((arg0) => {
  const tmp3 = _mod15269("Symbol");
  let tmpResultResult = _mod15267(tmp3);
  if (tmpResultResult) {
    const tmpResult = _mod15270;
    tmpResultResult = tmpResult(tmp3.prototype, Object(arg0));
  }
  return tmpResultResult;
});
