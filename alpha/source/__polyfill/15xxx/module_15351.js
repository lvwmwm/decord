// Module ID: 15351
// Function ID: 15352
// Dependencies: [15342, 15352, 15350, 15353]

// Module 15351
import _mod15342 from "module_15342" /* 15342 */;
import _mod15350 from "module_15350" /* 15350 */;
import _mod15352 from "module_15352" /* 15352 */;

let tmp;
const _mod15353 = tmp(15353);

export default _mod15342 ? ((arg0) => typeof arg0 === "symbol") : ((arg0) => {
  const tmp3 = _mod15352("Symbol");
  let tmpResultResult = _mod15350(tmp3);
  if (tmpResultResult) {
    const tmpResult = _mod15353;
    tmpResultResult = tmpResult(tmp3.prototype, Object(arg0));
  }
  return tmpResultResult;
});
