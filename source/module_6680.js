// Module ID: 6680
// Function ID: 58915
// Dependencies: [6681, 6682, 6683, 4327]

// Module 6680
import baseRest from "baseRest";


export default baseRest((arg0, arg1) => {
  if (null == arg0) {
    return [];
  } else {
    if (arg1.length > 1) {
      if (require(6682) /* isIterateeCall */(arg0, arg1[0], arg1[1])) {
        let items = [];
      }
      return require(6683) /* baseOrderBy */(arg0, require(4327) /* baseFlatten */(items, 1), []);
    }
    let tmp3 = length > 2;
    if (tmp3) {
      tmp3 = require(6682) /* isIterateeCall */(arg1[0], arg1[1], arg1[2]);
    }
    items = arg1;
    if (tmp3) {
      const items1 = [arg1[0]];
      items = items1;
    }
  }
});
