// Module ID: 16776
// Function ID: 16777
// Dependencies: [16767, 16777, 16775, 16778]

// Module 16776
import _mod16767 from "module_16767" /* 16767 */;
import _mod16775 from "module_16775" /* 16775 */;
import _mod16777 from "module_16777" /* 16777 */;

let tmp;
const _mod16778 = tmp(16778);

export default _mod16767 ? ((arg0) => typeof arg0 === "symbol") : ((arg0) => {
  const tmp3 = _mod16777("Symbol");
  let tmpResultResult = _mod16775(tmp3);
  if (tmpResultResult) {
    const tmpResult = _mod16778;
    tmpResultResult = tmpResult(tmp3.prototype, Object(arg0));
  }
  return tmpResultResult;
});
