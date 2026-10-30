// Module ID: 625
// Function ID: 626
// Name: toString
// Dependencies: [626]

// Module 625 (toString)
import baseToString from "baseToString" /* 626 */;


export default function toString(arg0) {
  let str = "";
  if (null != arg0) {
    str = baseToString(arg0);
  }
  return str;
};
