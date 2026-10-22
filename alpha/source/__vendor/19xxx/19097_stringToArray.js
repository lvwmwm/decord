// Module ID: 19097
// Function ID: 19098
// Name: stringToArray
// Dependencies: [19096, 19098, 19099]

// Module 19097 (stringToArray)
import hasUnicode from "hasUnicode" /* 19096 */;


export default function stringToArray(arg0) {
  let tmp3;
  if (hasUnicode(arg0)) {
    tmp3 = tmp(19098)(arg0);
  } else {
    tmp3 = tmp(19099)(arg0);
  }
  return tmp3;
};
