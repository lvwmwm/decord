// Module ID: 15625
// Function ID: 15626
// Dependencies: [15588, 15586, 15604, 15626, 15627]

// Module 15625
import _mod15586 from "module_15586" /* 15586 */;
import _mod15588 from "module_15588" /* 15588 */;
import _mod15604 from "module_15604" /* 15604 */;
import _mod15626 from "module_15626" /* 15626 */;

let closure_2 = _mod15588([].push);

export default (arg0, arg1) => {
  let num;
  const tmp = _mod15586(arg0);
  const items = [];
  for (const key10010 in tmp) {
    let tmp12 = require;
    let tmp14 = _mod15604;
    let tmp14Result = tmp14(_mod15626, key10010);
    let tmp2 = !tmp14Result && tmp12(15604)(tmp, key10010);
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
    if (_mod15604(tmp, tmp7)) {
      let tmp5Result = tmp5(15627);
      if (!(~tmp5Result.indexOf(items, tmp7))) {
        let tmp10 = closure_2(items, tmp7);
      }
    }
  }
  return items;
};
