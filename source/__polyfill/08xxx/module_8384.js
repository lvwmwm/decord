// Module ID: 8384
// Function ID: 8385
// Dependencies: [8385, 8386, 8387, 4670]

// Module 8384
import baseFlatten from "baseFlatten" /* 4670 */;
import baseRest from "baseRest" /* 8385 */;
import isIterateeCall from "isIterateeCall" /* 8386 */;
import baseOrderBy from "baseOrderBy" /* 8387 */;


export default baseRest((arg0, arg1) => {
  if (null == arg0) {
    return [];
  } else {
    if (arg1.length > 1) {
      if (isIterateeCall(arg0, arg1[0], arg1[1])) {
        let items = [];
      }
      return baseOrderBy(arg0, baseFlatten(items, 1), []);
    }
    let tmp3 = length > 2;
    if (tmp3) {
      tmp3 = isIterateeCall(arg1[0], arg1[1], arg1[2]);
    }
    items = arg1;
    if (tmp3) {
      const items1 = [arg1[0]];
      items = items1;
    }
  }
});
