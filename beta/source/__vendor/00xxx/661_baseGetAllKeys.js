// Module ID: 661
// Function ID: 662
// Name: baseGetAllKeys
// Dependencies: [514, 662]

// Module 661 (baseGetAllKeys)
import _mod514 from "module_514" /* 514 */;
import arrayPush from "arrayPush" /* 662 */;


export default function baseGetAllKeys(arg0, fn, fn2) {
  const tmp = fn(arg0);
  let tmp2ResultResult = tmp;
  if (!_mod514(arg0)) {
    tmp2ResultResult = arrayPush(tmp, fn2(arg0));
    const tmp2Result = arrayPush;
  }
  return tmp2ResultResult;
};
