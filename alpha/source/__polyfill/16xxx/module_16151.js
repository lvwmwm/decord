// Module ID: 16151
// Function ID: 16152
// Dependencies: [16142, 16152, 16150, 16153]

// Module 16151
import _mod16142 from "module_16142" /* 16142 */;
import _mod16150 from "module_16150" /* 16150 */;
import _mod16152 from "module_16152" /* 16152 */;

let tmp;
const _mod16153 = tmp(16153);

export default _mod16142 ? ((arg0) => typeof arg0 === "symbol") : ((arg0) => {
  const tmp3 = _mod16152("Symbol");
  let tmpResultResult = _mod16150(tmp3);
  if (tmpResultResult) {
    const tmpResult = _mod16153;
    tmpResultResult = tmpResult(tmp3.prototype, Object(arg0));
  }
  return tmpResultResult;
});
