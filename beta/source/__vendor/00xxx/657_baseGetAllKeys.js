// Module ID: 657
// Function ID: 658
// Name: baseGetAllKeys
// Dependencies: [514, 658]

// Module 657 (baseGetAllKeys)
import _mod514 from "module_514" /* 514 */;

let tmp2;
const arrayPush = tmp2(658);

export default function baseGetAllKeys(arg0, fn, fn2) {
  const tmp = fn(arg0);
  let tmp2ResultResult = tmp;
  if (!_mod514(arg0)) {
    const tmp2Result = arrayPush;
    tmp2ResultResult = tmp2Result(tmp, fn2(arg0));
  }
  return tmp2ResultResult;
};
