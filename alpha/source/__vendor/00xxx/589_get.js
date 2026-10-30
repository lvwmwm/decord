// Module ID: 589
// Function ID: 590
// Name: get
// Dependencies: [590]

// Module 589 (get)
import baseGet from "baseGet" /* 590 */;


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
