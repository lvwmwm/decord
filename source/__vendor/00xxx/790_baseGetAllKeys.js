// Module ID: 790
// Function ID: 791
// Name: baseGetAllKeys
// Dependencies: [596, 791]

// Module 790 (baseGetAllKeys)
import _mod596 from "module_596" /* 596 */;
import arrayPush from "arrayPush" /* 791 */;


export default function baseGetAllKeys(arg0, arg1, arg2) {
  const tmp = arg1(arg0);
  let tmp2ResultResult = tmp;
  if (!_mod596(arg0)) {
    tmp2ResultResult = arrayPush(tmp, arg2(arg0));
    const tmp2Result = arrayPush;
  }
  return tmp2ResultResult;
};
