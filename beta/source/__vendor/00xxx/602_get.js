// Module ID: 602
// Function ID: 603
// Name: get
// Dependencies: [603]

// Module 602 (get)
import baseGet from "baseGet" /* 603 */;


export default function get(arg0, arg1, arg2) {
  let tmp;
  if (null != arg0) {
    tmp = baseGet(arg0, arg1);
  }
  if (undefined === tmp) {
    tmp = arg2;
  }
  return tmp;
};
