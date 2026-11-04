// Module ID: 9096
// Function ID: 9097
// Dependencies: [9097, 9098, 9099, 5979]

// Module 9096
import baseFlatten from "baseFlatten" /* 5979 */;
import baseRest from "baseRest" /* 9097 */;
import isIterateeCall from "isIterateeCall" /* 9098 */;
import baseOrderBy from "baseOrderBy" /* 9099 */;


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
