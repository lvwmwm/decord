// Module ID: 14501
// Function ID: 14502
// Dependencies: [14492, 14502, 14500, 14503]

// Module 14501
import _mod14492 from "module_14492" /* 14492 */;
import _mod14500 from "module_14500" /* 14500 */;
import _mod14502 from "module_14502" /* 14502 */;

let tmp;
const _mod14503 = tmp(14503);

export default _mod14492 ? ((arg0) => typeof arg0 === "symbol") : ((arg0) => {
  const tmp3 = _mod14502("Symbol");
  let tmpResultResult = _mod14500(tmp3);
  if (tmpResultResult) {
    const tmpResult = _mod14503;
    tmpResultResult = tmpResult(tmp3.prototype, Object(arg0));
  }
  return tmpResultResult;
});
