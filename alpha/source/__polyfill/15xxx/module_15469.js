// Module ID: 15469
// Function ID: 15470
// Dependencies: [15460, 15470, 15468, 15471]

// Module 15469
import _mod15460 from "module_15460" /* 15460 */;
import _mod15468 from "module_15468" /* 15468 */;
import _mod15470 from "module_15470" /* 15470 */;

let tmp;
const _mod15471 = tmp(15471);

export default _mod15460 ? ((arg0) => typeof arg0 === "symbol") : ((arg0) => {
  const tmp3 = _mod15470("Symbol");
  let tmpResultResult = _mod15468(tmp3);
  if (tmpResultResult) {
    const tmpResult = _mod15471;
    tmpResultResult = tmpResult(tmp3.prototype, Object(arg0));
  }
  return tmpResultResult;
});
