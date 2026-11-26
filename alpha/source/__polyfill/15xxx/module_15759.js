// Module ID: 15759
// Function ID: 15760
// Dependencies: [15750, 15760, 15758, 15761]

// Module 15759
import _mod15750 from "module_15750" /* 15750 */;
import _mod15758 from "module_15758" /* 15758 */;
import _mod15760 from "module_15760" /* 15760 */;

let tmp;
const _mod15761 = tmp(15761);

export default _mod15750 ? ((arg0) => typeof arg0 === "symbol") : ((arg0) => {
  const tmp3 = _mod15760("Symbol");
  let tmpResultResult = _mod15758(tmp3);
  if (tmpResultResult) {
    const tmpResult = _mod15761;
    tmpResultResult = tmpResult(tmp3.prototype, Object(arg0));
  }
  return tmpResultResult;
});
