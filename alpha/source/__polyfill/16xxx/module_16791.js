// Module ID: 16791
// Function ID: 16792
// Dependencies: [16754, 16752, 16770, 16792, 16793]

// Module 16791
import _mod16752 from "module_16752" /* 16752 */;
import _mod16754 from "module_16754" /* 16754 */;
import _mod16770 from "module_16770" /* 16770 */;
import _mod16792 from "module_16792" /* 16792 */;

let closure_2 = _mod16754([].push);

export default (arg0, arg1) => {
  let num;
  const tmp = _mod16752(arg0);
  const items = [];
  for (const key10010 in tmp) {
    let tmp12 = require;
    let tmp14 = _mod16770;
    let tmp14Result = tmp14(_mod16792, key10010);
    let tmp2 = !tmp14Result && tmp12(16770)(tmp, key10010);
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
    if (_mod16770(tmp, tmp7)) {
      let tmp5Result = tmp5(16793);
      if (!(~tmp5Result.indexOf(items, tmp7))) {
        let tmp10 = closure_2(items, tmp7);
      }
    }
  }
  return items;
};
