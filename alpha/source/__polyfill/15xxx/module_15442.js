// Module ID: 15442
// Function ID: 15443
// Dependencies: [15433, 15443, 15441, 15444]

// Module 15442
import _mod15433 from "module_15433" /* 15433 */;
import _mod15441 from "module_15441" /* 15441 */;
import _mod15443 from "module_15443" /* 15443 */;

let tmp;
const _mod15444 = tmp(15444);

export default _mod15433 ? ((arg0) => typeof arg0 === "symbol") : ((arg0) => {
  const tmp3 = _mod15443("Symbol");
  let tmpResultResult = _mod15441(tmp3);
  if (tmpResultResult) {
    const tmpResult = _mod15444;
    tmpResultResult = tmpResult(tmp3.prototype, Object(arg0));
  }
  return tmpResultResult;
});
