// Module ID: 641
// Function ID: 642
// Name: hasIn
// Dependencies: [642, 643]

// Module 641 (hasIn)
import hasPath from "hasPath" /* 642 */;
import baseHasIn from "baseHasIn" /* 643 */;


export default function hasIn(arg0, arg1) {
  let tmp = null != arg0;
  if (tmp) {
    const tmp5 = hasPath;
    tmp = tmp5(arg0, arg1, baseHasIn);
  }
  return tmp;
};
