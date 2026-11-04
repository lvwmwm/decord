// Module ID: 16404
// Function ID: 16405
// Dependencies: [16367, 16365, 16383, 16405, 16406]

// Module 16404
import _mod16365 from "module_16365" /* 16365 */;
import _mod16367 from "module_16367" /* 16367 */;
import _mod16383 from "module_16383" /* 16383 */;
import _mod16405 from "module_16405" /* 16405 */;

let closure_2 = _mod16367([].push);

export default (arg0, arg1) => {
  let num;
  const tmp = _mod16365(arg0);
  const items = [];
  for (const key10010 in tmp) {
    let tmp12 = require;
    let tmp14 = _mod16383;
    let tmp14Result = tmp14(_mod16405, key10010);
    let tmp2 = !tmp14Result && tmp12(16383)(tmp, key10010);
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
    if (_mod16383(tmp, tmp7)) {
      let tmp5Result = tmp5(16406);
      if (!(~tmp5Result.indexOf(items, tmp7))) {
        let tmp10 = closure_2(items, tmp7);
      }
    }
  }
  return items;
};
