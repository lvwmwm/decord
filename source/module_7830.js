// Module ID: 7830
// Function ID: 7831
// Dependencies: [7831, 7832, 7833, 4495]

// Module 7830
import baseRest from "baseRest";


export default baseRest((arg0, arg1) => {
  if (null == arg0) {
    return [];
  } else {
    if (arg1.length > 1) {
      if (require(7832) /* isIterateeCall */(arg0, arg1[0], arg1[1])) {
        let items = [];
      }
      return require(7833) /* baseOrderBy */(arg0, require(4495) /* baseFlatten */(items, 1), []);
    }
    let tmp3 = length > 2;
    if (tmp3) {
      tmp3 = require(7832) /* isIterateeCall */(arg1[0], arg1[1], arg1[2]);
    }
    items = arg1;
    if (tmp3) {
      const items1 = [arg1[0]];
      items = items1;
    }
  }
});
