// Module ID: 7679
// Function ID: 7680
// Dependencies: [7680, 7681, 7682, 6149]

// Module 7679
import baseFlatten from "baseFlatten" /* 6149 */;
import baseRest from "baseRest" /* 7680 */;
import isIterateeCall from "isIterateeCall" /* 7681 */;
import baseOrderBy from "baseOrderBy" /* 7682 */;


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
