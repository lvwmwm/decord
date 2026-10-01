// Module ID: 592
// Function ID: 593
// Name: castPath
// Dependencies: [514, 586, 593, 626]

// Module 592 (castPath)
import _mod514 from "module_514" /* 514 */;
import isKey from "isKey" /* 586 */;
import memoizeCapped from "memoizeCapped" /* 593 */;


export default function castPath(arg0, arg1) {
  let tmp3 = arg0;
  if (!_mod514(arg0)) {
    let tmpResultResult;
    if (isKey(arg0, arg1)) {
      const items = [arg0];
      tmpResultResult = items;
    } else {
      const tmpResult = memoizeCapped;
      tmpResultResult = tmpResult(tmp(626)(arg0));
    }
    tmp3 = tmpResultResult;
  }
  return tmp3;
};
