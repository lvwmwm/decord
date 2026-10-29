// Module ID: 16087
// Function ID: 16088
// Dependencies: [16050, 16048, 16066, 16088, 16089]

// Module 16087
import _mod16048 from "module_16048" /* 16048 */;
import _mod16050 from "module_16050" /* 16050 */;
import _mod16066 from "module_16066" /* 16066 */;
import _mod16088 from "module_16088" /* 16088 */;

let closure_2 = _mod16050([].push);

export default (arg0, arg1) => {
  let num;
  const tmp = _mod16048(arg0);
  const items = [];
  for (const key10010 in tmp) {
    let tmp12 = require;
    let tmp14 = _mod16066;
    let tmp14Result = tmp14(_mod16088, key10010);
    let tmp2 = !tmp14Result && tmp12(16066)(tmp, key10010);
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
    if (_mod16066(tmp, tmp7)) {
      let tmp5Result = tmp5(16089);
      if (!(~tmp5Result.indexOf(items, tmp7))) {
        let tmp10 = closure_2(items, tmp7);
      }
    }
  }
  return items;
};
