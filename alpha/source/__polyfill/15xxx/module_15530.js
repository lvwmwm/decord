// Module ID: 15530
// Function ID: 15531
// Dependencies: [15493, 15491, 15509, 15531, 15532]

// Module 15530
import _mod15491 from "module_15491" /* 15491 */;
import _mod15493 from "module_15493" /* 15493 */;
import _mod15509 from "module_15509" /* 15509 */;
import _mod15531 from "module_15531" /* 15531 */;

let closure_2 = _mod15493([].push);

export default (arg0, arg1) => {
  let num;
  const tmp = _mod15491(arg0);
  const items = [];
  for (const key10010 in tmp) {
    let tmp12 = require;
    let tmp14 = _mod15509;
    let tmp14Result = tmp14(_mod15531, key10010);
    let tmp2 = !tmp14Result && tmp12(15509)(tmp, key10010);
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
    if (_mod15509(tmp, tmp7)) {
      let tmp5Result = tmp5(15532);
      if (!(~tmp5Result.indexOf(items, tmp7))) {
        let tmp10 = closure_2(items, tmp7);
      }
    }
  }
  return items;
};
