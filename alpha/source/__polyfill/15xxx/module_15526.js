// Module ID: 15526
// Function ID: 15527
// Dependencies: [15517, 15527, 15525, 15528]

// Module 15526
import _mod15517 from "module_15517" /* 15517 */;
import _mod15525 from "module_15525" /* 15525 */;
import _mod15527 from "module_15527" /* 15527 */;

let tmp;
const _mod15528 = tmp(15528);

export default _mod15517 ? ((arg0) => typeof arg0 === "symbol") : ((arg0) => {
  const tmp3 = _mod15527("Symbol");
  let tmpResultResult = _mod15525(tmp3);
  if (tmpResultResult) {
    const tmpResult = _mod15528;
    tmpResultResult = tmpResult(tmp3.prototype, Object(arg0));
  }
  return tmpResultResult;
});
