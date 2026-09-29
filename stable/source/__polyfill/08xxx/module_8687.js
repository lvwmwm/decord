// Module ID: 8687
// Function ID: 8688
// Dependencies: [8688, 8689, 8690, 4898]

// Module 8687
import baseFlatten from "baseFlatten" /* 4898 */;
import baseRest from "baseRest" /* 8688 */;
import _mod8689 from "module_8689" /* 8689 */;
import baseOrderBy from "baseOrderBy" /* 8690 */;


export default baseRest((arg0, arg1) => {
  if (null == arg0) {
    return [];
  } else {
    if (arg1.length > 1) {
      if (_mod8689(arg0, arg1[0], arg1[1])) {
        let items = [];
      }
      return baseOrderBy(arg0, baseFlatten(items, 1), []);
    }
    let tmp3 = length > 2;
    if (tmp3) {
      tmp3 = _mod8689(arg1[0], arg1[1], arg1[2]);
    }
    items = arg1;
    if (tmp3) {
      const items1 = [arg1[0]];
      items = items1;
    }
  }
});
