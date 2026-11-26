// Module ID: 7825
// Function ID: 7826
// Dependencies: [7826, 7827, 7828, 5924]

// Module 7825
import baseFlatten from "baseFlatten" /* 5924 */;
import baseRest from "baseRest" /* 7826 */;
import isIterateeCall from "isIterateeCall" /* 7827 */;
import baseOrderBy from "baseOrderBy" /* 7828 */;


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
