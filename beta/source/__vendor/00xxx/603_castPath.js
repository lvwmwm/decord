// Module ID: 603
// Function ID: 604
// Name: castPath
// Dependencies: [514, 597, 604, 637]

// Module 603 (castPath)
import _mod514 from "module_514" /* 514 */;
import isKey from "isKey" /* 597 */;
import memoizeCapped from "memoizeCapped" /* 604 */;


export default function castPath(arg0, arg1) {
  let tmp3 = arg0;
  if (!_mod514(arg0)) {
    let tmpResultResult;
    if (isKey(arg0, arg1)) {
      const items = [arg0];
      tmpResultResult = items;
    } else {
      const tmpResult = memoizeCapped;
      tmpResultResult = tmpResult(tmp(637)(arg0));
    }
    tmp3 = tmpResultResult;
  }
  return tmp3;
};
