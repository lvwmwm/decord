// Module ID: 16500
// Function ID: 16501
// Dependencies: [16491, 16501, 16499, 16502]

// Module 16500
import _mod16491 from "module_16491" /* 16491 */;
import _mod16499 from "module_16499" /* 16499 */;
import _mod16501 from "module_16501" /* 16501 */;

let tmp;
const _mod16502 = tmp(16502);

export default _mod16491 ? ((arg0) => typeof arg0 === "symbol") : ((arg0) => {
  const tmp3 = _mod16501("Symbol");
  let tmpResultResult = _mod16499(tmp3);
  if (tmpResultResult) {
    const tmpResult = _mod16502;
    tmpResultResult = tmpResult(tmp3.prototype, Object(arg0));
  }
  return tmpResultResult;
});
