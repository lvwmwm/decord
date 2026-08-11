// Module ID: 7766
// Function ID: 7767
// Dependencies: [7767, 7768, 7769, 4454]

// Module 7766
import baseRest from "baseRest";


export default baseRest((arg0, arg1) => {
  if (null == arg0) {
    return [];
  } else {
    if (arg1.length > 1) {
      if (require(7768) /* isIterateeCall */(arg0, arg1[0], arg1[1])) {
        let items = [];
      }
      return require(7769) /* baseOrderBy */(arg0, require(4454) /* baseFlatten */(items, 1), []);
    }
    let tmp3 = length > 2;
    if (tmp3) {
      tmp3 = require(7768) /* isIterateeCall */(arg1[0], arg1[1], arg1[2]);
    }
    items = arg1;
    if (tmp3) {
      const items1 = [arg1[0]];
      items = items1;
    }
  }
});
