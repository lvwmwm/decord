// Module ID: 637
// Function ID: 638
// Name: toString
// Dependencies: [638]

// Module 637 (toString)
import baseToString from "baseToString" /* 638 */;


export default function toString(arg0) {
  let str = "";
  if (null != arg0) {
    str = baseToString(arg0);
  }
  return str;
};
