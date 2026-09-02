// Module ID: 762
// Function ID: 763
// Name: hasIn
// Dependencies: [763, 764]

// Module 762 (hasIn)
import hasPath from "hasPath" /* 763 */;
import baseHasIn from "baseHasIn" /* 764 */;


export default function hasIn(arg0, arg1) {
  let tmp = null != arg0;
  if (tmp) {
    tmp = hasPath(arg0, arg1, baseHasIn);
    const tmp5 = hasPath;
  }
  return tmp;
};
