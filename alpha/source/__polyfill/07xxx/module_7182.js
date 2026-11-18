// Module ID: 7182
// Function ID: 7183
// Dependencies: [7183, 7184, 7185, 5645]

// Module 7182
import baseFlatten from "baseFlatten" /* 5645 */;
import baseRest from "baseRest" /* 7183 */;
import isIterateeCall from "isIterateeCall" /* 7184 */;
import baseOrderBy from "baseOrderBy" /* 7185 */;


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
