// Module ID: 15586
// Function ID: 15587
// Dependencies: [15577, 15587, 15585, 15588]

// Module 15586
import _mod15577 from "module_15577" /* 15577 */;
import _mod15585 from "module_15585" /* 15585 */;
import _mod15587 from "module_15587" /* 15587 */;

let tmp;
const _mod15588 = tmp(15588);

export default _mod15577 ? ((arg0) => typeof arg0 === "symbol") : ((arg0) => {
  const tmp3 = _mod15587("Symbol");
  let tmpResultResult = _mod15585(tmp3);
  if (tmpResultResult) {
    const tmpResult = _mod15588;
    tmpResultResult = tmpResult(tmp3.prototype, Object(arg0));
  }
  return tmpResultResult;
});
