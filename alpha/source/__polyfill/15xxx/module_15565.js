// Module ID: 15565
// Function ID: 15566
// Dependencies: [15556, 15566, 15564, 15567]

// Module 15565
import _mod15556 from "module_15556" /* 15556 */;
import _mod15564 from "module_15564" /* 15564 */;
import _mod15566 from "module_15566" /* 15566 */;

let tmp;
const _mod15567 = tmp(15567);

export default _mod15556 ? ((arg0) => typeof arg0 === "symbol") : ((arg0) => {
  const tmp3 = _mod15566("Symbol");
  let tmpResultResult = _mod15564(tmp3);
  if (tmpResultResult) {
    const tmpResult = _mod15567;
    tmpResultResult = tmpResult(tmp3.prototype, Object(arg0));
  }
  return tmpResultResult;
});
