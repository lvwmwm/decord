// Module ID: 604
// Function ID: 605
// Name: castPath
// Dependencies: [514, 598, 605, 638]

// Module 604 (castPath)
import _mod514 from "module_514" /* 514 */;
import isKey from "isKey" /* 598 */;
import memoizeCapped from "memoizeCapped" /* 605 */;


export default function castPath(arg0, arg1) {
  let tmp3 = arg0;
  if (!_mod514(arg0)) {
    let tmpResultResult;
    if (isKey(arg0, arg1)) {
      const items = [arg0];
      tmpResultResult = items;
    } else {
      const tmpResult = memoizeCapped;
      tmpResultResult = tmpResult(tmp(638)(arg0));
    }
    tmp3 = tmpResultResult;
  }
  return tmp3;
};
