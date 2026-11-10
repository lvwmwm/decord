// Module ID: 16512
// Function ID: 16513
// Dependencies: [16475, 16473, 16491, 16513, 16514]

// Module 16512
import _mod16473 from "module_16473" /* 16473 */;
import _mod16475 from "module_16475" /* 16475 */;
import _mod16491 from "module_16491" /* 16491 */;
import _mod16513 from "module_16513" /* 16513 */;

let closure_2 = _mod16475([].push);

export default (arg0, arg1) => {
  let num;
  const tmp = _mod16473(arg0);
  const items = [];
  for (const key10010 in tmp) {
    let tmp12 = require;
    let tmp14 = _mod16491;
    let tmp14Result = tmp14(_mod16513, key10010);
    let tmp2 = !tmp14Result && tmp12(16491)(tmp, key10010);
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
    if (_mod16491(tmp, tmp7)) {
      let tmp5Result = tmp5(16514);
      if (!(~tmp5Result.indexOf(items, tmp7))) {
        let tmp10 = closure_2(items, tmp7);
      }
    }
  }
  return items;
};
