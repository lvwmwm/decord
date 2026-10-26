// Module ID: 19195
// Function ID: 19196
// Name: stringToArray
// Dependencies: [19194, 19196, 19197]

// Module 19195 (stringToArray)
import hasUnicode from "hasUnicode" /* 19194 */;


export default function stringToArray(arg0) {
  let tmp3;
  if (hasUnicode(arg0)) {
    tmp3 = tmp(19196)(arg0);
  } else {
    tmp3 = tmp(19197)(arg0);
  }
  return tmp3;
};
