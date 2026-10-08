// Module ID: 14405
// Function ID: 14406
// Dependencies: [14396, 14406, 14404, 14407]

// Module 14405
import _mod14396 from "module_14396" /* 14396 */;
import _mod14404 from "module_14404" /* 14404 */;
import _mod14406 from "module_14406" /* 14406 */;

let tmp;
const _mod14407 = tmp(14407);

export default _mod14396 ? ((arg0) => typeof arg0 === "symbol") : ((arg0) => {
  const tmp3 = _mod14406("Symbol");
  let tmpResultResult = _mod14404(tmp3);
  if (tmpResultResult) {
    const tmpResult = _mod14407;
    tmpResultResult = tmpResult(tmp3.prototype, Object(arg0));
  }
  return tmpResultResult;
});
