// Module ID: 16150
// Function ID: 16151
// Dependencies: [16141, 16151, 16149, 16152]

// Module 16150
import _mod16141 from "module_16141" /* 16141 */;
import _mod16149 from "module_16149" /* 16149 */;
import _mod16151 from "module_16151" /* 16151 */;

let tmp;
const _mod16152 = tmp(16152);

export default _mod16141 ? ((arg0) => typeof arg0 === "symbol") : ((arg0) => {
  const tmp3 = _mod16151("Symbol");
  let tmpResultResult = _mod16149(tmp3);
  if (tmpResultResult) {
    const tmpResult = _mod16152;
    tmpResultResult = tmpResult(tmp3.prototype, Object(arg0));
  }
  return tmpResultResult;
});
