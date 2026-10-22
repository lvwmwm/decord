// Module ID: 15543
// Function ID: 15544
// Dependencies: [15506, 15504, 15522, 15544, 15545]

// Module 15543
import _mod15504 from "module_15504" /* 15504 */;
import _mod15506 from "module_15506" /* 15506 */;
import _mod15522 from "module_15522" /* 15522 */;
import _mod15544 from "module_15544" /* 15544 */;

let closure_2 = _mod15506([].push);

export default (arg0, arg1) => {
  let num;
  const tmp = _mod15504(arg0);
  const items = [];
  for (const key10010 in tmp) {
    let tmp12 = require;
    let tmp14 = _mod15522;
    let tmp14Result = tmp14(_mod15544, key10010);
    let tmp2 = !tmp14Result && tmp12(15522)(tmp, key10010);
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
    if (_mod15522(tmp, tmp7)) {
      let tmp5Result = tmp5(15545);
      if (!(~tmp5Result.indexOf(items, tmp7))) {
        let tmp10 = closure_2(items, tmp7);
      }
    }
  }
  return items;
};
