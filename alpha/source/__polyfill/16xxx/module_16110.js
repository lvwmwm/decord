// Module ID: 16110
// Function ID: 16111
// Dependencies: [16101, 16111, 16109, 16112]

// Module 16110
import _mod16101 from "module_16101" /* 16101 */;
import _mod16109 from "module_16109" /* 16109 */;
import _mod16111 from "module_16111" /* 16111 */;

let tmp;
const _mod16112 = tmp(16112);

export default _mod16101 ? ((arg0) => typeof arg0 === "symbol") : ((arg0) => {
  const tmp3 = _mod16111("Symbol");
  let tmpResultResult = _mod16109(tmp3);
  if (tmpResultResult) {
    const tmpResult = _mod16112;
    tmpResultResult = tmpResult(tmp3.prototype, Object(arg0));
  }
  return tmpResultResult;
});
