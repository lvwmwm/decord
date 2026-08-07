// Module ID: 7704
// Function ID: 7705
// Dependencies: [7705, 7706, 7707, 4452]

// Module 7704
import baseRest from "baseRest";


export default baseRest((arg0, arg1) => {
  if (null == arg0) {
    return [];
  } else {
    if (arg1.length > 1) {
      if (require(7706) /* isIterateeCall */(arg0, arg1[0], arg1[1])) {
        let items = [];
      }
      return require(7707) /* baseOrderBy */(arg0, require(4452) /* baseFlatten */(items, 1), []);
    }
    let tmp3 = length > 2;
    if (tmp3) {
      tmp3 = require(7706) /* isIterateeCall */(arg1[0], arg1[1], arg1[2]);
    }
    items = arg1;
    if (tmp3) {
      const items1 = [arg1[0]];
      items = items1;
    }
  }
});
