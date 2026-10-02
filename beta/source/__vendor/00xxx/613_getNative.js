// Module ID: 613
// Function ID: 614
// Name: getNative
// Dependencies: [614, 615]

// Module 613 (getNative)
import getValue from "getValue" /* 614 */;
import baseIsNative from "baseIsNative" /* 615 */;


export default function getNative(arg0, arg1) {
  const tmp = getValue(arg0, arg1);
  let tmp2;
  if (baseIsNative(tmp)) {
    tmp2 = tmp;
  }
  return tmp2;
};
