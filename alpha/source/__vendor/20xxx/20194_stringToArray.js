// Module ID: 20194
// Function ID: 20195
// Name: stringToArray
// Dependencies: [20193, 20195, 20196]

// Module 20194 (stringToArray)
import hasUnicode from "hasUnicode" /* 20193 */;


export default function stringToArray(arg0) {
  let tmp3;
  if (hasUnicode(arg0)) {
    tmp3 = tmp(20195)(arg0);
  } else {
    tmp3 = tmp(20196)(arg0);
  }
  return tmp3;
};
