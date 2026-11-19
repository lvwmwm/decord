// Module ID: 15478
// Function ID: 15479
// Dependencies: [15469, 15479, 15477, 15480]

// Module 15478
import _mod15469 from "module_15469" /* 15469 */;
import _mod15477 from "module_15477" /* 15477 */;
import _mod15479 from "module_15479" /* 15479 */;

let tmp;
const _mod15480 = tmp(15480);

export default _mod15469 ? ((arg0) => typeof arg0 === "symbol") : ((arg0) => {
  const tmp3 = _mod15479("Symbol");
  let tmpResultResult = _mod15477(tmp3);
  if (tmpResultResult) {
    const tmpResult = _mod15480;
    tmpResultResult = tmpResult(tmp3.prototype, Object(arg0));
  }
  return tmpResultResult;
});
