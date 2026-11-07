// Module ID: 16458
// Function ID: 16459
// Dependencies: [16449, 16459, 16457, 16460]

// Module 16458
import _mod16449 from "module_16449" /* 16449 */;
import _mod16457 from "module_16457" /* 16457 */;
import _mod16459 from "module_16459" /* 16459 */;

let tmp;
const _mod16460 = tmp(16460);

export default _mod16449 ? ((arg0) => typeof arg0 === "symbol") : ((arg0) => {
  const tmp3 = _mod16459("Symbol");
  let tmpResultResult = _mod16457(tmp3);
  if (tmpResultResult) {
    const tmpResult = _mod16460;
    tmpResultResult = tmpResult(tmp3.prototype, Object(arg0));
  }
  return tmpResultResult;
});
