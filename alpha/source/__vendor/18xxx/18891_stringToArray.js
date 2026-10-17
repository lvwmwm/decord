// Module ID: 18891
// Function ID: 18892
// Name: stringToArray
// Dependencies: [18890, 18892, 18893]

// Module 18891 (stringToArray)
import hasUnicode from "hasUnicode" /* 18890 */;


export default function stringToArray(arg0) {
  let tmp3;
  if (hasUnicode(arg0)) {
    tmp3 = tmp(18892)(arg0);
  } else {
    tmp3 = tmp(18893)(arg0);
  }
  return tmp3;
};
