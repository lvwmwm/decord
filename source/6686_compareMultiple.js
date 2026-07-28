// Module ID: 6686
// Function ID: 58933
// Name: compareMultiple
// Dependencies: [6687]

// Module 6686 (compareMultiple)

export default function compareMultiple(criteria, index) {
  criteria = criteria.criteria;
  let num = 0;
  if (0 < criteria.length) {
    const tmp5 = require(6687) /* compareAscending */(criteria[num], tmp[num]);
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
