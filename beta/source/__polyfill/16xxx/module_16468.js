// Module ID: 16468
// Function ID: 16469
// Dependencies: [16459, 16469, 16467, 16470]

// Module 16468
import _mod16459 from "module_16459" /* 16459 */;
import _mod16467 from "module_16467" /* 16467 */;
import _mod16469 from "module_16469" /* 16469 */;

let tmp;
const _mod16470 = tmp(16470);

export default _mod16459 ? ((arg0) => typeof arg0 === "symbol") : ((arg0) => {
  const tmp3 = _mod16469("Symbol");
  let tmpResultResult = _mod16467(tmp3);
  if (tmpResultResult) {
    const tmpResult = _mod16470;
    tmpResultResult = tmpResult(tmp3.prototype, Object(arg0));
  }
  return tmpResultResult;
});
