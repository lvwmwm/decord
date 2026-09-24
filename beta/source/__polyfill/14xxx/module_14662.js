// Module ID: 14662
// Function ID: 14663
// Dependencies: [14625, 14623, 14641, 14663, 14664]

// Module 14662
import _mod14623 from "module_14623" /* 14623 */;
import _mod14625 from "module_14625" /* 14625 */;
import _mod14641 from "module_14641" /* 14641 */;
import _mod14663 from "module_14663" /* 14663 */;

let closure_2 = _mod14625([].push);

export default (arg0, arg1) => {
  const tmp = _mod14623(arg0);
  const items = [];
  for (const key10010 in tmp) {
    let tmp12 = require;
    let tmp14 = _mod14641;
    let tmp14Result = tmp14(_mod14663, key10010);
    let tmp2 = !tmp14Result;
    if (!tmp14Result) {
      tmp2 = tmp12(14641)(tmp, key10010);
    }
    if (!tmp2) {
      continue;
    } else {
      let tmp4 = closure_2(items, key10010);
      continue;
    }
    continue;
  }
  for (let num = 0; arg1.length > num; num = num + 1) {
    let tmp5 = require;
    let tmp7 = arg1[num];
    if (_mod14641(tmp, tmp7)) {
      let tmp5Result = tmp5(14664);
      if (!~tmp5Result.indexOf(items, tmp7)) {
        let tmp10 = closure_2(items, tmp7);
      }
    }
  }
  return items;
};
