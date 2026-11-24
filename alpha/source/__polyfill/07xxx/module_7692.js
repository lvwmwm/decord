// Module ID: 7692
// Function ID: 7693
// Dependencies: [7693, 7694, 7695, 5798]

// Module 7692
import baseFlatten from "baseFlatten" /* 5798 */;
import baseRest from "baseRest" /* 7693 */;
import isIterateeCall from "isIterateeCall" /* 7694 */;
import baseOrderBy from "baseOrderBy" /* 7695 */;


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
