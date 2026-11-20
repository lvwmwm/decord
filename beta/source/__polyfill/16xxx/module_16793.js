// Module ID: 16793
// Function ID: 16794
// Dependencies: [16756, 16754, 16772, 16794, 16795]

// Module 16793
import _mod16754 from "module_16754" /* 16754 */;
import _mod16756 from "module_16756" /* 16756 */;
import _mod16772 from "module_16772" /* 16772 */;
import _mod16794 from "module_16794" /* 16794 */;

let closure_2 = _mod16756([].push);

export default (arg0, arg1) => {
  let num;
  const tmp = _mod16754(arg0);
  const items = [];
  for (const key10010 in tmp) {
    let tmp12 = require;
    let tmp14 = _mod16772;
    let tmp14Result = tmp14(_mod16794, key10010);
    let tmp2 = !tmp14Result && tmp12(16772)(tmp, key10010);
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
    if (_mod16772(tmp, tmp7)) {
      let tmp5Result = tmp5(16795);
      if (!(~tmp5Result.indexOf(items, tmp7))) {
        let tmp10 = closure_2(items, tmp7);
      }
    }
  }
  return items;
};
