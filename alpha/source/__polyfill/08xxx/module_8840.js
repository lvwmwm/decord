// Module ID: 8840
// Function ID: 8841
// Dependencies: [8841, 8842, 8843, 5781]

// Module 8840
import baseFlatten from "baseFlatten" /* 5781 */;
import baseRest from "baseRest" /* 8841 */;
import isIterateeCall from "isIterateeCall" /* 8842 */;
import baseOrderBy from "baseOrderBy" /* 8843 */;


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
