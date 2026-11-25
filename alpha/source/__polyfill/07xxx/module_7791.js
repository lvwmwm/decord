// Module ID: 7791
// Function ID: 7792
// Dependencies: [7792, 7793, 7794, 5893]

// Module 7791
import baseFlatten from "baseFlatten" /* 5893 */;
import baseRest from "baseRest" /* 7792 */;
import isIterateeCall from "isIterateeCall" /* 7793 */;
import baseOrderBy from "baseOrderBy" /* 7794 */;


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
