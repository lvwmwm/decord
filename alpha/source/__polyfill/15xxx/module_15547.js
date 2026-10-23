// Module ID: 15547
// Function ID: 15548
// Dependencies: [15538, 15548, 15546, 15549]

// Module 15547
import _mod15538 from "module_15538" /* 15538 */;
import _mod15546 from "module_15546" /* 15546 */;
import _mod15548 from "module_15548" /* 15548 */;

let tmp;
const _mod15549 = tmp(15549);

export default _mod15538 ? ((arg0) => typeof arg0 === "symbol") : ((arg0) => {
  const tmp3 = _mod15548("Symbol");
  let tmpResultResult = _mod15546(tmp3);
  if (tmpResultResult) {
    const tmpResult = _mod15549;
    tmpResultResult = tmpResult(tmp3.prototype, Object(arg0));
  }
  return tmpResultResult;
});
