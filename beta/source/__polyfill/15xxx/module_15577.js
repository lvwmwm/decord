// Module ID: 15577
// Function ID: 15578
// Dependencies: [15568, 15578, 15576, 15579]

// Module 15577
import _mod15568 from "module_15568" /* 15568 */;
import _mod15576 from "module_15576" /* 15576 */;
import _mod15578 from "module_15578" /* 15578 */;

let tmp;
const _mod15579 = tmp(15579);

export default _mod15568 ? ((arg0) => typeof arg0 === "symbol") : ((arg0) => {
  const tmp3 = _mod15578("Symbol");
  let tmpResultResult = _mod15576(tmp3);
  if (tmpResultResult) {
    const tmpResult = _mod15579;
    tmpResultResult = tmpResult(tmp3.prototype, Object(arg0));
  }
  return tmpResultResult;
});
