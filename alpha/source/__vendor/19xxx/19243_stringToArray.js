// Module ID: 19243
// Function ID: 19244
// Name: stringToArray
// Dependencies: [19242, 19244, 19245]

// Module 19243 (stringToArray)
import hasUnicode from "hasUnicode" /* 19242 */;


export default function stringToArray(arg0) {
  let tmp3;
  if (hasUnicode(arg0)) {
    tmp3 = tmp(19244)(arg0);
  } else {
    tmp3 = tmp(19245)(arg0);
  }
  return tmp3;
};
