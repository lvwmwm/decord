// Module ID: 8951
// Function ID: 8952
// Dependencies: [8952, 8953, 8954, 5845]

// Module 8951
import baseFlatten from "baseFlatten" /* 5845 */;
import baseRest from "baseRest" /* 8952 */;
import isIterateeCall from "isIterateeCall" /* 8953 */;
import baseOrderBy from "baseOrderBy" /* 8954 */;


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
