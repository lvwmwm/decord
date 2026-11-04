// Module ID: 16400
// Function ID: 16401
// Dependencies: [16391, 16401, 16399, 16402]

// Module 16400
import _mod16391 from "module_16391" /* 16391 */;
import _mod16399 from "module_16399" /* 16399 */;
import _mod16401 from "module_16401" /* 16401 */;

let tmp;
const _mod16402 = tmp(16402);

export default _mod16391 ? ((arg0) => typeof arg0 === "symbol") : ((arg0) => {
  const tmp3 = _mod16401("Symbol");
  let tmpResultResult = _mod16399(tmp3);
  if (tmpResultResult) {
    const tmpResult = _mod16402;
    tmpResultResult = tmpResult(tmp3.prototype, Object(arg0));
  }
  return tmpResultResult;
});
