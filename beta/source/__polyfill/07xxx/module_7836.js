// Module ID: 7836
// Function ID: 7837
// Dependencies: [7837, 7838, 7839, 4947]

// Module 7836
import baseFlatten from "baseFlatten" /* 4947 */;
import baseRest from "baseRest" /* 7837 */;
import isIterateeCall from "isIterateeCall" /* 7838 */;
import baseOrderBy from "baseOrderBy" /* 7839 */;


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
