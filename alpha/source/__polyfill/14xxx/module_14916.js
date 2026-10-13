// Module ID: 14916
// Function ID: 14917
// Dependencies: [14879, 14877, 14895, 14917, 14918]

// Module 14916
import _mod14877 from "module_14877" /* 14877 */;
import _mod14879 from "module_14879" /* 14879 */;
import _mod14895 from "module_14895" /* 14895 */;
import _mod14917 from "module_14917" /* 14917 */;

let closure_2 = _mod14879([].push);

export default (arg0, arg1) => {
  let num;
  const tmp = _mod14877(arg0);
  const items = [];
  for (const key10010 in tmp) {
    let tmp12 = require;
    let tmp14 = _mod14895;
    let tmp14Result = tmp14(_mod14917, key10010);
    let tmp2 = !tmp14Result && tmp12(14895)(tmp, key10010);
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
    if (_mod14895(tmp, tmp7)) {
      let tmp5Result = tmp5(14918);
      if (!(~tmp5Result.indexOf(items, tmp7))) {
        let tmp10 = closure_2(items, tmp7);
      }
    }
  }
  return items;
};
