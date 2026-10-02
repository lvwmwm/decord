// Module ID: 13834
// Function ID: 13835
// Dependencies: [13797, 13795, 13813, 13835, 13836]

// Module 13834
import _mod13795 from "module_13795" /* 13795 */;
import _mod13797 from "module_13797" /* 13797 */;
import _mod13813 from "module_13813" /* 13813 */;
import _mod13835 from "module_13835" /* 13835 */;

let closure_2 = _mod13797([].push);

export default (arg0, arg1) => {
  let num;
  const tmp = _mod13795(arg0);
  const items = [];
  for (const key10010 in tmp) {
    let tmp12 = require;
    let tmp14 = _mod13813;
    let tmp14Result = tmp14(_mod13835, key10010);
    let tmp2 = !tmp14Result && tmp12(13813)(tmp, key10010);
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
    if (_mod13813(tmp, tmp7)) {
      let tmp5Result = tmp5(13836);
      if (!(~tmp5Result.indexOf(items, tmp7))) {
        let tmp10 = closure_2(items, tmp7);
      }
    }
  }
  return items;
};
