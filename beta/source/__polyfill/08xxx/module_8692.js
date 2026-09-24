// Module ID: 8692
// Function ID: 8693
// Dependencies: [8693, 8694, 8695, 4900]

// Module 8692
import baseFlatten from "baseFlatten" /* 4900 */;
import baseRest from "baseRest" /* 8693 */;
import _mod8694 from "module_8694" /* 8694 */;
import baseOrderBy from "baseOrderBy" /* 8695 */;


export default baseRest((arg0, arg1) => {
  if (null == arg0) {
    return [];
  } else {
    if (arg1.length > 1) {
      if (_mod8694(arg0, arg1[0], arg1[1])) {
        let items = [];
      }
      return baseOrderBy(arg0, baseFlatten(items, 1), []);
    }
    let tmp3 = length > 2;
    if (tmp3) {
      tmp3 = _mod8694(arg1[0], arg1[1], arg1[2]);
    }
    items = arg1;
    if (tmp3) {
      const items1 = [arg1[0]];
      items = items1;
    }
  }
});
