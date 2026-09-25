// Module ID: 13877
// Function ID: 13878
// Dependencies: [13840, 13838, 13856, 13878, 13879]

// Module 13877
import _mod13838 from "module_13838" /* 13838 */;
import _mod13840 from "module_13840" /* 13840 */;
import _mod13856 from "module_13856" /* 13856 */;
import _mod13878 from "module_13878" /* 13878 */;

let closure_2 = _mod13840([].push);

export default (arg0, arg1) => {
  const tmp = _mod13838(arg0);
  const items = [];
  for (const key10010 in tmp) {
    let tmp12 = require;
    let tmp14 = _mod13856;
    let tmp14Result = tmp14(_mod13878, key10010);
    let tmp2 = !tmp14Result;
    if (!tmp14Result) {
      tmp2 = tmp12(13856)(tmp, key10010);
    }
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
    if (_mod13856(tmp, tmp7)) {
      let tmp5Result = tmp5(13879);
      if (!~tmp5Result.indexOf(items, tmp7)) {
        let tmp10 = closure_2(items, tmp7);
      }
    }
  }
  return items;
};
