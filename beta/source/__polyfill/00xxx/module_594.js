// Module ID: 594
// Function ID: 595
// Dependencies: [595]

// Module 594
import baseGet from "baseGet" /* 595 */;


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
