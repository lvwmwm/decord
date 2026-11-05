// Module ID: 16413
// Function ID: 16414
// Dependencies: [16404, 16414, 16412, 16415]

// Module 16413
import _mod16404 from "module_16404" /* 16404 */;
import _mod16412 from "module_16412" /* 16412 */;
import _mod16414 from "module_16414" /* 16414 */;

let tmp;
const _mod16415 = tmp(16415);

export default _mod16404 ? ((arg0) => typeof arg0 === "symbol") : ((arg0) => {
  const tmp3 = _mod16414("Symbol");
  let tmpResultResult = _mod16412(tmp3);
  if (tmpResultResult) {
    const tmpResult = _mod16415;
    tmpResultResult = tmpResult(tmp3.prototype, Object(arg0));
  }
  return tmpResultResult;
});
