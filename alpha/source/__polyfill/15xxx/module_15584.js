// Module ID: 15584
// Function ID: 15585
// Dependencies: [15547, 15545, 15563, 15585, 15586]

// Module 15584
import _mod15545 from "module_15545" /* 15545 */;
import _mod15547 from "module_15547" /* 15547 */;
import _mod15563 from "module_15563" /* 15563 */;
import _mod15585 from "module_15585" /* 15585 */;

let closure_2 = _mod15547([].push);

export default (arg0, arg1) => {
  let num;
  const tmp = _mod15545(arg0);
  const items = [];
  for (const key10010 in tmp) {
    let tmp12 = require;
    let tmp14 = _mod15563;
    let tmp14Result = tmp14(_mod15585, key10010);
    let tmp2 = !tmp14Result && tmp12(15563)(tmp, key10010);
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
    if (_mod15563(tmp, tmp7)) {
      let tmp5Result = tmp5(15586);
      if (!(~tmp5Result.indexOf(items, tmp7))) {
        let tmp10 = closure_2(items, tmp7);
      }
    }
  }
  return items;
};
