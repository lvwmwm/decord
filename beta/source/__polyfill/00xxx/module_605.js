// Module ID: 605
// Function ID: 606
// Dependencies: [606, 607]

// Module 605
import _mod606 from "module_606" /* 606 */;
import baseIsNative from "baseIsNative" /* 607 */;


export default function getNative(arg0, arg1) {
  const tmp = _mod606(arg0, arg1);
  let tmp2;
  if (baseIsNative(tmp)) {
    tmp2 = tmp;
  }
  return tmp2;
};
