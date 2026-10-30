// Module ID: 628
// Function ID: 629
// Name: hasIn
// Dependencies: [629, 630]

// Module 628 (hasIn)
import hasPath from "hasPath" /* 629 */;
import baseHasIn from "baseHasIn" /* 630 */;


export default function hasIn(arg0, arg1) {
  let tmp = null != arg0;
  if (tmp) {
    const tmp5 = hasPath;
    tmp = tmp5(arg0, arg1, baseHasIn);
  }
  return tmp;
};
