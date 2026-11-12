// Module ID: 16514
// Function ID: 16515
// Dependencies: [16477, 16475, 16493, 16515, 16516]

// Module 16514
import _mod16475 from "module_16475" /* 16475 */;
import _mod16477 from "module_16477" /* 16477 */;
import _mod16493 from "module_16493" /* 16493 */;
import _mod16515 from "module_16515" /* 16515 */;

let closure_2 = _mod16477([].push);

export default (arg0, arg1) => {
  let num;
  const tmp = _mod16475(arg0);
  const items = [];
  for (const key10010 in tmp) {
    let tmp12 = require;
    let tmp14 = _mod16493;
    let tmp14Result = tmp14(_mod16515, key10010);
    let tmp2 = !tmp14Result && tmp12(16493)(tmp, key10010);
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
    if (_mod16493(tmp, tmp7)) {
      let tmp5Result = tmp5(16516);
      if (!(~tmp5Result.indexOf(items, tmp7))) {
        let tmp10 = closure_2(items, tmp7);
      }
    }
  }
  return items;
};
