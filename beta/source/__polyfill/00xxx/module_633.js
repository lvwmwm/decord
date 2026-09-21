// Module ID: 633
// Function ID: 634
// Dependencies: [634, 635]

// Module 633
import _mod634 from "module_634" /* 634 */;
import baseHasIn from "baseHasIn" /* 635 */;


export default function hasIn(arg0, arg1) {
  let tmp = null != arg0;
  if (tmp) {
    tmp = _mod634(arg0, arg1, baseHasIn);
  }
  return tmp;
};
