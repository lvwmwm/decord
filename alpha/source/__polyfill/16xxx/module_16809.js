// Module ID: 16809
// Function ID: 16810
// Dependencies: [16800, 16810, 16808, 16811]

// Module 16809
import _mod16800 from "module_16800" /* 16800 */;
import _mod16808 from "module_16808" /* 16808 */;
import _mod16810 from "module_16810" /* 16810 */;

let tmp;
const _mod16811 = tmp(16811);

export default _mod16800 ? ((arg0) => typeof arg0 === "symbol") : ((arg0) => {
  const tmp3 = _mod16810("Symbol");
  let tmpResultResult = _mod16808(tmp3);
  if (tmpResultResult) {
    const tmpResult = _mod16811;
    tmpResultResult = tmpResult(tmp3.prototype, Object(arg0));
  }
  return tmpResultResult;
});
