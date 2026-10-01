// Module ID: 629
// Function ID: 630
// Name: hasIn
// Dependencies: [630, 631]

// Module 629 (hasIn)
import hasPath from "hasPath" /* 630 */;
import baseHasIn from "baseHasIn" /* 631 */;


export default function hasIn(arg0, arg1) {
  let tmp = null != arg0;
  if (tmp) {
    const tmp5 = hasPath;
    tmp = tmp5(arg0, arg1, baseHasIn);
  }
  return tmp;
};
