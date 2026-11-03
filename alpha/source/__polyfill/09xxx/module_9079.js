// Module ID: 9079
// Function ID: 9080
// Dependencies: [9080, 9081, 9082, 5965]

// Module 9079
import baseFlatten from "baseFlatten" /* 5965 */;
import baseRest from "baseRest" /* 9080 */;
import isIterateeCall from "isIterateeCall" /* 9081 */;
import baseOrderBy from "baseOrderBy" /* 9082 */;


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
