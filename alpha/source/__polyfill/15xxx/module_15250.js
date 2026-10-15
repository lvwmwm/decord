// Module ID: 15250
// Function ID: 15251
// Dependencies: [15213, 15211, 15229, 15251, 15252]

// Module 15250
import _mod15211 from "module_15211" /* 15211 */;
import _mod15213 from "module_15213" /* 15213 */;
import _mod15229 from "module_15229" /* 15229 */;
import _mod15251 from "module_15251" /* 15251 */;

let closure_2 = _mod15213([].push);

export default (arg0, arg1) => {
  let num;
  const tmp = _mod15211(arg0);
  const items = [];
  for (const key10010 in tmp) {
    let tmp12 = require;
    let tmp14 = _mod15229;
    let tmp14Result = tmp14(_mod15251, key10010);
    let tmp2 = !tmp14Result && tmp12(15229)(tmp, key10010);
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
    if (_mod15229(tmp, tmp7)) {
      let tmp5Result = tmp5(15252);
      if (!(~tmp5Result.indexOf(items, tmp7))) {
        let tmp10 = closure_2(items, tmp7);
      }
    }
  }
  return items;
};
