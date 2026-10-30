// Module ID: 8942
// Function ID: 8943
// Dependencies: [8943, 8944, 8945, 5840]

// Module 8942
import baseFlatten from "baseFlatten" /* 5840 */;
import baseRest from "baseRest" /* 8943 */;
import isIterateeCall from "isIterateeCall" /* 8944 */;
import baseOrderBy from "baseOrderBy" /* 8945 */;


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
