// Module ID: 15459
// Function ID: 15460
// Dependencies: [15422, 15420, 15438, 15460, 15461]

// Module 15459
import _mod15420 from "module_15420" /* 15420 */;
import _mod15422 from "module_15422" /* 15422 */;
import _mod15438 from "module_15438" /* 15438 */;
import _mod15460 from "module_15460" /* 15460 */;

let closure_2 = _mod15422([].push);

export default (arg0, arg1) => {
  let num;
  const tmp = _mod15420(arg0);
  const items = [];
  for (const key10010 in tmp) {
    let tmp12 = require;
    let tmp14 = _mod15438;
    let tmp14Result = tmp14(_mod15460, key10010);
    let tmp2 = !tmp14Result && tmp12(15438)(tmp, key10010);
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
    if (_mod15438(tmp, tmp7)) {
      let tmp5Result = tmp5(15461);
      if (!(~tmp5Result.indexOf(items, tmp7))) {
        let tmp10 = closure_2(items, tmp7);
      }
    }
  }
  return items;
};
