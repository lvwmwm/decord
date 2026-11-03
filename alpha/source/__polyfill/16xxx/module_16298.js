// Module ID: 16298
// Function ID: 16299
// Dependencies: [16289, 16299, 16297, 16300]

// Module 16298
import _mod16289 from "module_16289" /* 16289 */;
import _mod16297 from "module_16297" /* 16297 */;
import _mod16299 from "module_16299" /* 16299 */;

let tmp;
const _mod16300 = tmp(16300);

export default _mod16289 ? ((arg0) => typeof arg0 === "symbol") : ((arg0) => {
  const tmp3 = _mod16299("Symbol");
  let tmpResultResult = _mod16297(tmp3);
  if (tmpResultResult) {
    const tmpResult = _mod16300;
    tmpResultResult = tmpResult(tmp3.prototype, Object(arg0));
  }
  return tmpResultResult;
});
