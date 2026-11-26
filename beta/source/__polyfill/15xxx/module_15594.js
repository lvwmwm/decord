// Module ID: 15594
// Function ID: 15595
// Dependencies: [15557, 15555, 15573, 15595, 15596]

// Module 15594
import _mod15555 from "module_15555" /* 15555 */;
import _mod15557 from "module_15557" /* 15557 */;
import _mod15573 from "module_15573" /* 15573 */;
import _mod15595 from "module_15595" /* 15595 */;

let closure_2 = _mod15557([].push);

export default (arg0, arg1) => {
  let num;
  const tmp = _mod15555(arg0);
  const items = [];
  for (const key10010 in tmp) {
    let tmp12 = require;
    let tmp14 = _mod15573;
    let tmp14Result = tmp14(_mod15595, key10010);
    let tmp2 = !tmp14Result && tmp12(15573)(tmp, key10010);
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
    if (_mod15573(tmp, tmp7)) {
      let tmp5Result = tmp5(15596);
      if (!(~tmp5Result.indexOf(items, tmp7))) {
        let tmp10 = closure_2(items, tmp7);
      }
    }
  }
  return items;
};
