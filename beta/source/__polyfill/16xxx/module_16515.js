// Module ID: 16515
// Function ID: 16516
// Dependencies: [16478, 16476, 16494, 16516, 16517]

// Module 16515
import _mod16476 from "module_16476" /* 16476 */;
import _mod16478 from "module_16478" /* 16478 */;
import _mod16494 from "module_16494" /* 16494 */;
import _mod16516 from "module_16516" /* 16516 */;

let closure_2 = _mod16478([].push);

export default (arg0, arg1) => {
  let num;
  const tmp = _mod16476(arg0);
  const items = [];
  for (const key10010 in tmp) {
    let tmp12 = require;
    let tmp14 = _mod16494;
    let tmp14Result = tmp14(_mod16516, key10010);
    let tmp2 = !tmp14Result && tmp12(16494)(tmp, key10010);
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
    if (_mod16494(tmp, tmp7)) {
      let tmp5Result = tmp5(16517);
      if (!(~tmp5Result.indexOf(items, tmp7))) {
        let tmp10 = closure_2(items, tmp7);
      }
    }
  }
  return items;
};
