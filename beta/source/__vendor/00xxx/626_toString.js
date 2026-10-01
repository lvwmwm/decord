// Module ID: 626
// Function ID: 627
// Name: toString
// Dependencies: [627]

// Module 626 (toString)
import baseToString from "baseToString" /* 627 */;


export default function toString(arg0) {
  let str = "";
  if (null != arg0) {
    str = baseToString(arg0);
  }
  return str;
};
