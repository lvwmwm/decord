// Module ID: 9063
// Function ID: 9064
// Dependencies: [9064, 9065, 9066, 6006]

// Module 9063
import baseFlatten from "baseFlatten" /* 6006 */;
import baseRest from "baseRest" /* 9064 */;
import isIterateeCall from "isIterateeCall" /* 9065 */;
import baseOrderBy from "baseOrderBy" /* 9066 */;


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
