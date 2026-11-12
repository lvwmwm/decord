// Module ID: 16668
// Function ID: 16669
// Dependencies: [16631, 16629, 16647, 16669, 16670]

// Module 16668
import _mod16629 from "module_16629" /* 16629 */;
import _mod16631 from "module_16631" /* 16631 */;
import _mod16647 from "module_16647" /* 16647 */;
import _mod16669 from "module_16669" /* 16669 */;

let closure_2 = _mod16631([].push);

export default (arg0, arg1) => {
  let num;
  const tmp = _mod16629(arg0);
  const items = [];
  for (const key10010 in tmp) {
    let tmp12 = require;
    let tmp14 = _mod16647;
    let tmp14Result = tmp14(_mod16669, key10010);
    let tmp2 = !tmp14Result && tmp12(16647)(tmp, key10010);
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
    if (_mod16647(tmp, tmp7)) {
      let tmp5Result = tmp5(16670);
      if (!(~tmp5Result.indexOf(items, tmp7))) {
        let tmp10 = closure_2(items, tmp7);
      }
    }
  }
  return items;
};
