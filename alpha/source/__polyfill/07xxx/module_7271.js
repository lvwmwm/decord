// Module ID: 7271
// Function ID: 7272
// Dependencies: [7272, 7273, 7274, 5735]

// Module 7271
import baseFlatten from "baseFlatten" /* 5735 */;
import baseRest from "baseRest" /* 7272 */;
import isIterateeCall from "isIterateeCall" /* 7273 */;
import baseOrderBy from "baseOrderBy" /* 7274 */;


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
