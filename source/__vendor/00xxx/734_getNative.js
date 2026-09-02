// Module ID: 734
// Function ID: 735
// Name: getNative
// Dependencies: [735, 736]

// Module 734 (getNative)
import getValue from "getValue" /* 735 */;
import baseIsNative from "baseIsNative" /* 736 */;


export default function getNative(arg0, arg1) {
  const tmp = getValue(arg0, arg1);
  let tmp2;
  if (baseIsNative(tmp)) {
    tmp2 = tmp;
  }
  return tmp2;
};
