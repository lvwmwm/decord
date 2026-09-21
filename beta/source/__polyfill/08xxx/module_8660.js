// Module ID: 8660
// Function ID: 8661
// Dependencies: [8661, 8662, 8663, 4868]

// Module 8660
import baseFlatten from "baseFlatten" /* 4868 */;
import baseRest from "baseRest" /* 8661 */;
import _mod8662 from "module_8662" /* 8662 */;
import baseOrderBy from "baseOrderBy" /* 8663 */;


export default baseRest((arg0, arg1) => {
  if (null == arg0) {
    return [];
  } else {
    if (arg1.length > 1) {
      if (_mod8662(arg0, arg1[0], arg1[1])) {
        let items = [];
      }
      return baseOrderBy(arg0, baseFlatten(items, 1), []);
    }
    let tmp3 = length > 2;
    if (tmp3) {
      tmp3 = _mod8662(arg1[0], arg1[1], arg1[2]);
    }
    items = arg1;
    if (tmp3) {
      const items1 = [arg1[0]];
      items = items1;
    }
  }
});
