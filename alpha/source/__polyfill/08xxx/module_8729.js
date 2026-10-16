// Module ID: 8729
// Function ID: 8730
// Dependencies: [8730, 8731, 8732, 5254]

// Module 8729
import baseFlatten from "baseFlatten" /* 5254 */;
import baseRest from "baseRest" /* 8730 */;
import isIterateeCall from "isIterateeCall" /* 8731 */;
import baseOrderBy from "baseOrderBy" /* 8732 */;


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
