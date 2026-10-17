// Module ID: 15347
// Function ID: 15348
// Dependencies: [15338, 15348, 15346, 15349]

// Module 15347
import _mod15338 from "module_15338" /* 15338 */;
import _mod15346 from "module_15346" /* 15346 */;
import _mod15348 from "module_15348" /* 15348 */;

let tmp;
const _mod15349 = tmp(15349);

export default _mod15338 ? ((arg0) => typeof arg0 === "symbol") : ((arg0) => {
  const tmp3 = _mod15348("Symbol");
  let tmpResultResult = _mod15346(tmp3);
  if (tmpResultResult) {
    const tmpResult = _mod15349;
    tmpResultResult = tmpResult(tmp3.prototype, Object(arg0));
  }
  return tmpResultResult;
});
