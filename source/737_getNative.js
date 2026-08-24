// Module ID: 737
// Function ID: 738
// Name: getNative
// Dependencies: [738, 739]

// Module 737 (getNative)
import getValue from "getValue" /* 738 */;
import baseIsNative from "baseIsNative" /* 739 */;


export default function getNative(arg0, arg1) {
  const tmp = getValue(arg0, arg1);
  let tmp2;
  if (baseIsNative(tmp)) {
    tmp2 = tmp;
  }
  return tmp2;
};
