// Module ID: 8721
// Function ID: 8722
// Dependencies: [8722, 8723, 8724, 5252]

// Module 8721
import baseFlatten from "baseFlatten" /* 5252 */;
import baseRest from "baseRest" /* 8722 */;
import isIterateeCall from "isIterateeCall" /* 8723 */;
import baseOrderBy from "baseOrderBy" /* 8724 */;


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
