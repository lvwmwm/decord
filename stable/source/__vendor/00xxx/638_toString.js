// Module ID: 638
// Function ID: 639
// Name: toString
// Dependencies: [639]

// Module 638 (toString)
import baseToString from "baseToString" /* 639 */;


export default function toString(arg0) {
  let str = "";
  if (null != arg0) {
    str = baseToString(arg0);
  }
  return str;
};
