// Module ID: 9108
// Function ID: 9109
// Name: compareMultiple
// Dependencies: [9109]

// Module 9108 (compareMultiple)
import compareAscending from "compareAscending" /* 9109 */;


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
