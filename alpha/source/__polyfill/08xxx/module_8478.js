// Module ID: 8478
// Function ID: 8479
// Dependencies: [8479, 8480, 8481, 5191]

// Module 8478
import baseFlatten from "baseFlatten" /* 5191 */;
import baseRest from "baseRest" /* 8479 */;
import isIterateeCall from "isIterateeCall" /* 8480 */;
import baseOrderBy from "baseOrderBy" /* 8481 */;


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
