// Module ID: 6698
// Function ID: 6699
// Dependencies: [6699, 6700, 6701, 4340]

// Module 6698
import baseRest from "baseRest";


export default baseRest((arg0, arg1) => {
  if (null == arg0) {
    return [];
  } else {
    if (arg1.length > 1) {
      if (require(6700) /* isIterateeCall */(arg0, arg1[0], arg1[1])) {
        let items = [];
      }
      return require(6701) /* baseOrderBy */(arg0, require(4340) /* baseFlatten */(items, 1), []);
    }
    let tmp3 = length > 2;
    if (tmp3) {
      tmp3 = require(6700) /* isIterateeCall */(arg1[0], arg1[1], arg1[2]);
    }
    items = arg1;
    if (tmp3) {
      const items1 = [arg1[0]];
      items = items1;
    }
  }
});
