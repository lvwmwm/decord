// Module ID: 8906
// Function ID: 8907
// Dependencies: [8907, 8908, 8909, 5831]

// Module 8906
import baseFlatten from "baseFlatten" /* 5831 */;
import baseRest from "baseRest" /* 8907 */;
import isIterateeCall from "isIterateeCall" /* 8908 */;
import baseOrderBy from "baseOrderBy" /* 8909 */;


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
