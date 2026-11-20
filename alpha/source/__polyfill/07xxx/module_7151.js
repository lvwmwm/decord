// Module ID: 7151
// Function ID: 7152
// Dependencies: [7152, 7153, 7154, 5616]

// Module 7151
import baseFlatten from "baseFlatten" /* 5616 */;
import baseRest from "baseRest" /* 7152 */;
import isIterateeCall from "isIterateeCall" /* 7153 */;
import baseOrderBy from "baseOrderBy" /* 7154 */;


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
