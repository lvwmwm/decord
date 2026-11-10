// Module ID: 16167
// Function ID: 16168
// Dependencies: [16130, 16128, 16146, 16168, 16169]

// Module 16167
import _mod16128 from "module_16128" /* 16128 */;
import _mod16130 from "module_16130" /* 16130 */;
import _mod16146 from "module_16146" /* 16146 */;
import _mod16168 from "module_16168" /* 16168 */;

let closure_2 = _mod16130([].push);

export default (arg0, arg1) => {
  let num;
  const tmp = _mod16128(arg0);
  const items = [];
  for (const key10010 in tmp) {
    let tmp12 = require;
    let tmp14 = _mod16146;
    let tmp14Result = tmp14(_mod16168, key10010);
    let tmp2 = !tmp14Result && tmp12(16146)(tmp, key10010);
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
    if (_mod16146(tmp, tmp7)) {
      let tmp5Result = tmp5(16169);
      if (!(~tmp5Result.indexOf(items, tmp7))) {
        let tmp10 = closure_2(items, tmp7);
      }
    }
  }
  return items;
};
