// Module ID: 19196
// Function ID: 19197
// Name: stringToArray
// Dependencies: [19195, 19197, 19198]

// Module 19196 (stringToArray)
import hasUnicode from "hasUnicode" /* 19195 */;


export default function stringToArray(arg0) {
  let tmp3;
  if (hasUnicode(arg0)) {
    tmp3 = tmp(19197)(arg0);
  } else {
    tmp3 = tmp(19198)(arg0);
  }
  return tmp3;
};
