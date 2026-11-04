// Module ID: 16387
// Function ID: 16388
// Dependencies: [16378, 16388, 16386, 16389]

// Module 16387
import _mod16378 from "module_16378" /* 16378 */;
import _mod16386 from "module_16386" /* 16386 */;
import _mod16388 from "module_16388" /* 16388 */;

let tmp;
const _mod16389 = tmp(16389);

export default _mod16378 ? ((arg0) => typeof arg0 === "symbol") : ((arg0) => {
  const tmp3 = _mod16388("Symbol");
  let tmpResultResult = _mod16386(tmp3);
  if (tmpResultResult) {
    const tmpResult = _mod16389;
    tmpResultResult = tmpResult(tmp3.prototype, Object(arg0));
  }
  return tmpResultResult;
});
