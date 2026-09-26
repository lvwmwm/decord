// Module ID: 14652
// Function ID: 14653
// Dependencies: [14615, 14613, 14631, 14653, 14654]

// Module 14652
import _mod14613 from "module_14613" /* 14613 */;
import _mod14615 from "module_14615" /* 14615 */;
import _mod14631 from "module_14631" /* 14631 */;
import _mod14653 from "module_14653" /* 14653 */;

let closure_2 = _mod14615([].push);

export default (arg0, arg1) => {
  const tmp = _mod14613(arg0);
  const items = [];
  for (const key10010 in tmp) {
    let tmp12 = require;
    let tmp14 = _mod14631;
    let tmp14Result = tmp14(_mod14653, key10010);
    let tmp2 = !tmp14Result;
    if (!tmp14Result) {
      tmp2 = tmp12(14631)(tmp, key10010);
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
    if (_mod14631(tmp, tmp7)) {
      let tmp5Result = tmp5(14654);
      if (!~tmp5Result.indexOf(items, tmp7)) {
        let tmp10 = closure_2(items, tmp7);
      }
    }
  }
  return items;
};
