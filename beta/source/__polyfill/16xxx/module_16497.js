// Module ID: 16497
// Function ID: 16498
// Dependencies: [16488, 16498, 16496, 16499]

// Module 16497
import _mod16488 from "module_16488" /* 16488 */;
import _mod16496 from "module_16496" /* 16496 */;
import _mod16498 from "module_16498" /* 16498 */;

let tmp;
const _mod16499 = tmp(16499);

export default _mod16488 ? ((arg0) => typeof arg0 === "symbol") : ((arg0) => {
  const tmp3 = _mod16498("Symbol");
  let tmpResultResult = _mod16496(tmp3);
  if (tmpResultResult) {
    const tmpResult = _mod16499;
    tmpResultResult = tmpResult(tmp3.prototype, Object(arg0));
  }
  return tmpResultResult;
});
