// Module ID: 8486
// Function ID: 8487
// Dependencies: [8487, 8488, 8489, 5192]

// Module 8486
import baseFlatten from "baseFlatten" /* 5192 */;
import baseRest from "baseRest" /* 8487 */;
import isIterateeCall from "isIterateeCall" /* 8488 */;
import baseOrderBy from "baseOrderBy" /* 8489 */;


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
