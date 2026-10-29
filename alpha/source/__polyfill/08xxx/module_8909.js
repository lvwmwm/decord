// Module ID: 8909
// Function ID: 8910
// Dependencies: [8910, 8911, 8912, 5833]

// Module 8909
import baseFlatten from "baseFlatten" /* 5833 */;
import baseRest from "baseRest" /* 8910 */;
import isIterateeCall from "isIterateeCall" /* 8911 */;
import baseOrderBy from "baseOrderBy" /* 8912 */;


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
