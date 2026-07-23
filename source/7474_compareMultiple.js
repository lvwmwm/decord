// Module ID: 7474
// Function ID: 60007
// Name: compareMultiple
// Dependencies: [7475]

// Module 7474 (compareMultiple)

export default function compareMultiple(criteria, index) {
  criteria = criteria.criteria;
  let num = 0;
  if (0 < criteria.length) {
    const tmp5 = require(7475) /* compareAscending */(criteria[num], tmp[num]);
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
