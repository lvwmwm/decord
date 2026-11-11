// Module ID: 7603
// Function ID: 7604
// Dependencies: [7604, 7605, 7606, 6089]

// Module 7603
import baseFlatten from "baseFlatten" /* 6089 */;
import baseRest from "baseRest" /* 7604 */;
import isIterateeCall from "isIterateeCall" /* 7605 */;
import baseOrderBy from "baseOrderBy" /* 7606 */;


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
