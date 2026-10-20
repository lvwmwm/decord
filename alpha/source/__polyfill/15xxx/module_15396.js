// Module ID: 15396
// Function ID: 15397
// Dependencies: [15359, 15357, 15375, 15397, 15398]

// Module 15396
import _mod15357 from "module_15357" /* 15357 */;
import _mod15359 from "module_15359" /* 15359 */;
import _mod15375 from "module_15375" /* 15375 */;
import _mod15397 from "module_15397" /* 15397 */;

let closure_2 = _mod15359([].push);

export default (arg0, arg1) => {
  let num;
  const tmp = _mod15357(arg0);
  const items = [];
  for (const key10010 in tmp) {
    let tmp12 = require;
    let tmp14 = _mod15375;
    let tmp14Result = tmp14(_mod15397, key10010);
    let tmp2 = !tmp14Result && tmp12(15375)(tmp, key10010);
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
    if (_mod15375(tmp, tmp7)) {
      let tmp5Result = tmp5(15398);
      if (!(~tmp5Result.indexOf(items, tmp7))) {
        let tmp10 = closure_2(items, tmp7);
      }
    }
  }
  return items;
};
