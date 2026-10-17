// Module ID: 8776
// Function ID: 8777
// Dependencies: [8777, 8778, 8779, 5292]

// Module 8776
import baseFlatten from "baseFlatten" /* 5292 */;
import baseRest from "baseRest" /* 8777 */;
import isIterateeCall from "isIterateeCall" /* 8778 */;
import baseOrderBy from "baseOrderBy" /* 8779 */;


export default baseRest((arg0, arg1) => {
  if (null == arg0) {
    return [];
  } else {
    let items;
    if (arg1.length > 1) {
      if (isIterateeCall(arg0, arg1[0], arg1[1])) {
        items = [];
      }
      const tmp8 = baseOrderBy;
      return tmp8(arg0, baseFlatten(items, 1), []);
    }
    items = arg1;
    const tmp3 = length > 2 && isIterateeCall(arg1[0], arg1[1], arg1[2]);
    if (tmp3) {
      const items1 = [arg1[0]];
      items = items1;
    }
  }
});
