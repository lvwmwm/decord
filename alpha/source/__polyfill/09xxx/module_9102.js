// Module ID: 9102
// Function ID: 9103
// Dependencies: [9103, 9104, 9105, 5982]

// Module 9102
import baseFlatten from "baseFlatten" /* 5982 */;
import baseRest from "baseRest" /* 9103 */;
import isIterateeCall from "isIterateeCall" /* 9104 */;
import baseOrderBy from "baseOrderBy" /* 9105 */;


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
