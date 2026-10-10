// Module ID: 14555
// Function ID: 14556
// Dependencies: [14546, 14556, 14554, 14557]

// Module 14555
import _mod14546 from "module_14546" /* 14546 */;
import _mod14554 from "module_14554" /* 14554 */;
import _mod14556 from "module_14556" /* 14556 */;

let tmp;
const _mod14557 = tmp(14557);

export default _mod14546 ? ((arg0) => typeof arg0 === "symbol") : ((arg0) => {
  const tmp3 = _mod14556("Symbol");
  let tmpResultResult = _mod14554(tmp3);
  if (tmpResultResult) {
    const tmpResult = _mod14557;
    tmpResultResult = tmpResult(tmp3.prototype, Object(arg0));
  }
  return tmpResultResult;
});
