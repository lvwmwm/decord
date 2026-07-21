// Module ID: 7469
// Function ID: 59962
// Name: compareMultiple
// Dependencies: []

// Module 7469 (compareMultiple)

export default function compareMultiple(criteria, index) {
  criteria = criteria.criteria;
  let num = 0;
  if (0 < criteria.length) {
    const tmp5 = require(dependencyMap[0])(criteria[num], tmp[num]);
    while (!tmp5) {
      num = num + 1;
    }
    let result = tmp5;
    if (num < tmp2) {
      let num2 = 1;
      if ("desc" == arg2[num]) {
        num2 = -1;
      }
      result = tmp5 * num2;
    }
    return result;
  }
  return criteria.index - index.index;
};
