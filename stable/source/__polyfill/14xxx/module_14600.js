// Module ID: 14600
// Function ID: 14601
// Dependencies: [14563, 14561, 14579, 14601, 14602]

// Module 14600
import _mod14561 from "module_14561" /* 14561 */;
import _mod14563 from "module_14563" /* 14563 */;
import _mod14579 from "module_14579" /* 14579 */;
import _mod14601 from "module_14601" /* 14601 */;

let closure_2 = _mod14563([].push);

export default (arg0, arg1) => {
  let num;
  const tmp = _mod14561(arg0);
  const items = [];
  for (const key10010 in tmp) {
    let tmp12 = require;
    let tmp14 = _mod14579;
    let tmp14Result = tmp14(_mod14601, key10010);
    let tmp2 = !tmp14Result && tmp12(14579)(tmp, key10010);
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
    if (_mod14579(tmp, tmp7)) {
      let tmp5Result = tmp5(14602);
      if (!(~tmp5Result.indexOf(items, tmp7))) {
        let tmp10 = closure_2(items, tmp7);
      }
    }
  }
  return items;
};
