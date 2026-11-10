// Module ID: 9036
// Function ID: 9037
// Dependencies: [9037, 9038, 9039, 5976]

// Module 9036
import baseFlatten from "baseFlatten" /* 5976 */;
import baseRest from "baseRest" /* 9037 */;
import isIterateeCall from "isIterateeCall" /* 9038 */;
import baseOrderBy from "baseOrderBy" /* 9039 */;


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
