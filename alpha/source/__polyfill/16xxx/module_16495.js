// Module ID: 16495
// Function ID: 16496
// Dependencies: [16486, 16496, 16494, 16497]

// Module 16495
import _mod16486 from "module_16486" /* 16486 */;
import _mod16494 from "module_16494" /* 16494 */;
import _mod16496 from "module_16496" /* 16496 */;

let tmp;
const _mod16497 = tmp(16497);

export default _mod16486 ? ((arg0) => typeof arg0 === "symbol") : ((arg0) => {
  const tmp3 = _mod16496("Symbol");
  let tmpResultResult = _mod16494(tmp3);
  if (tmpResultResult) {
    const tmpResult = _mod16497;
    tmpResultResult = tmpResult(tmp3.prototype, Object(arg0));
  }
  return tmpResultResult;
});
