// Module ID: 8804
// Function ID: 8805
// Dependencies: [8805, 8806, 8807, 5756]

// Module 8804
import baseFlatten from "baseFlatten" /* 5756 */;
import baseRest from "baseRest" /* 8805 */;
import isIterateeCall from "isIterateeCall" /* 8806 */;
import baseOrderBy from "baseOrderBy" /* 8807 */;


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
