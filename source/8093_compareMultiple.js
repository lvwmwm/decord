// Module ID: 8093
// Function ID: 8094
// Name: compareMultiple
// Dependencies: [8094]

// Module 8093 (compareMultiple)
import compareAscending from "compareAscending" /* 8094 */;


export default function compareMultiple(criteria, index) {
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
