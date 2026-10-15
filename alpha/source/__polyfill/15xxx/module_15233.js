// Module ID: 15233
// Function ID: 15234
// Dependencies: [15224, 15234, 15232, 15235]

// Module 15233
import _mod15224 from "module_15224" /* 15224 */;
import _mod15232 from "module_15232" /* 15232 */;
import _mod15234 from "module_15234" /* 15234 */;

let tmp;
const _mod15235 = tmp(15235);

export default _mod15224 ? ((arg0) => typeof arg0 === "symbol") : ((arg0) => {
  const tmp3 = _mod15234("Symbol");
  let tmpResultResult = _mod15232(tmp3);
  if (tmpResultResult) {
    const tmpResult = _mod15235;
    tmpResultResult = tmpResult(tmp3.prototype, Object(arg0));
  }
  return tmpResultResult;
});
