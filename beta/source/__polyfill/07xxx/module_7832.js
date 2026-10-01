// Module ID: 7832
// Function ID: 7833
// Dependencies: [7833, 7834, 7835, 4946]

// Module 7832
import baseFlatten from "baseFlatten" /* 4946 */;
import baseRest from "baseRest" /* 7833 */;
import isIterateeCall from "isIterateeCall" /* 7834 */;
import baseOrderBy from "baseOrderBy" /* 7835 */;


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
