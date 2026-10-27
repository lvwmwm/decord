// Module ID: 15589
// Function ID: 15590
// Dependencies: [15552, 15550, 15568, 15590, 15591]

// Module 15589
import _mod15550 from "module_15550" /* 15550 */;
import _mod15552 from "module_15552" /* 15552 */;
import _mod15568 from "module_15568" /* 15568 */;
import _mod15590 from "module_15590" /* 15590 */;

let closure_2 = _mod15552([].push);

export default (arg0, arg1) => {
  let num;
  const tmp = _mod15550(arg0);
  const items = [];
  for (const key10010 in tmp) {
    let tmp12 = require;
    let tmp14 = _mod15568;
    let tmp14Result = tmp14(_mod15590, key10010);
    let tmp2 = !tmp14Result && tmp12(15568)(tmp, key10010);
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
    if (_mod15568(tmp, tmp7)) {
      let tmp5Result = tmp5(15591);
      if (!(~tmp5Result.indexOf(items, tmp7))) {
        let tmp10 = closure_2(items, tmp7);
      }
    }
  }
  return items;
};
