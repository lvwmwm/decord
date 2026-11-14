// Module ID: 7669
// Function ID: 7670
// Dependencies: [7670, 7671, 7672, 6152]

// Module 7669
import baseFlatten from "baseFlatten" /* 6152 */;
import baseRest from "baseRest" /* 7670 */;
import isIterateeCall from "isIterateeCall" /* 7671 */;
import baseOrderBy from "baseOrderBy" /* 7672 */;


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
