// Module ID: 15563
// Function ID: 15564
// Dependencies: [15554, 15564, 15562, 15565]

// Module 15563
import _mod15554 from "module_15554" /* 15554 */;
import _mod15562 from "module_15562" /* 15562 */;
import _mod15564 from "module_15564" /* 15564 */;

let tmp;
const _mod15565 = tmp(15565);

export default _mod15554 ? ((arg0) => typeof arg0 === "symbol") : ((arg0) => {
  const tmp3 = _mod15564("Symbol");
  let tmpResultResult = _mod15562(tmp3);
  if (tmpResultResult) {
    const tmpResult = _mod15565;
    tmpResultResult = tmpResult(tmp3.prototype, Object(arg0));
  }
  return tmpResultResult;
});
