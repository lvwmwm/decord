// Module ID: 15606
// Function ID: 15607
// Dependencies: [15597, 15607, 15605, 15608]

// Module 15606
import _mod15597 from "module_15597" /* 15597 */;
import _mod15605 from "module_15605" /* 15605 */;
import _mod15607 from "module_15607" /* 15607 */;

let tmp;
const _mod15608 = tmp(15608);

export default _mod15597 ? ((arg0) => typeof arg0 === "symbol") : ((arg0) => {
  const tmp3 = _mod15607("Symbol");
  let tmpResultResult = _mod15605(tmp3);
  if (tmpResultResult) {
    const tmpResult = _mod15608;
    tmpResultResult = tmpResult(tmp3.prototype, Object(arg0));
  }
  return tmpResultResult;
});
