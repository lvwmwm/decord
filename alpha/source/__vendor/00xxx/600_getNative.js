// Module ID: 600
// Function ID: 601
// Name: getNative
// Dependencies: [601, 602]

// Module 600 (getNative)
import getValue from "getValue" /* 601 */;
import baseIsNative from "baseIsNative" /* 602 */;


export default function getNative(arg0, arg1) {
  const tmp = getValue(arg0, arg1);
  let tmp2;
  if (baseIsNative(tmp)) {
    tmp2 = tmp;
  }
  return tmp2;
};
