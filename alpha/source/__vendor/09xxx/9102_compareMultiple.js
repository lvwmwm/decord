// Module ID: 9102
// Function ID: 9103
// Name: compareMultiple
// Dependencies: [9103]

// Module 9102 (compareMultiple)
import compareAscending from "compareAscending" /* 9103 */;


export default function compareMultiple(criteria, index, arg2) {
  criteria = criteria.criteria;
  let num = 0;
  let num2 = 1;
  if (0 < criteria.length) {
    const tmp5 = compareAscending(criteria[num], tmp[num]);
    while (!tmp5) {
      num = num + num2;
    }
    let result = tmp5;
    if (num < tmp2) {
      if ("desc" == arg2[num]) {
        num2 = -1;
      }
      result = tmp5 * num2;
    }
    return result;
  }
  return criteria.index - index.index;
};
