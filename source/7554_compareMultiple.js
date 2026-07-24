// Module ID: 7554
// Function ID: 60253
// Name: compareMultiple
// Dependencies: [7555]

// Module 7554 (compareMultiple)

export default function compareMultiple(criteria, index) {
  criteria = criteria.criteria;
  let num = 0;
  if (0 < criteria.length) {
    const tmp5 = require(7555) /* compareAscending */(criteria[num], tmp[num]);
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
