// Module ID: 16517
// Function ID: 16518
// Dependencies: [16480, 16478, 16496, 16518, 16519]

// Module 16517
import _mod16478 from "module_16478" /* 16478 */;
import _mod16480 from "module_16480" /* 16480 */;
import _mod16496 from "module_16496" /* 16496 */;
import _mod16518 from "module_16518" /* 16518 */;

let closure_2 = _mod16480([].push);

export default (arg0, arg1) => {
  let num;
  const tmp = _mod16478(arg0);
  const items = [];
  for (const key10010 in tmp) {
    let tmp12 = require;
    let tmp14 = _mod16496;
    let tmp14Result = tmp14(_mod16518, key10010);
    let tmp2 = !tmp14Result && tmp12(16496)(tmp, key10010);
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
    if (_mod16496(tmp, tmp7)) {
      let tmp5Result = tmp5(16519);
      if (!(~tmp5Result.indexOf(items, tmp7))) {
        let tmp10 = closure_2(items, tmp7);
      }
    }
  }
  return items;
};
