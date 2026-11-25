// Module ID: 15590
// Function ID: 15591
// Dependencies: [15553, 15551, 15569, 15591, 15592]

// Module 15590
import _mod15551 from "module_15551" /* 15551 */;
import _mod15553 from "module_15553" /* 15553 */;
import _mod15569 from "module_15569" /* 15569 */;
import _mod15591 from "module_15591" /* 15591 */;

let closure_2 = _mod15553([].push);

export default (arg0, arg1) => {
  let num;
  const tmp = _mod15551(arg0);
  const items = [];
  for (const key10010 in tmp) {
    let tmp12 = require;
    let tmp14 = _mod15569;
    let tmp14Result = tmp14(_mod15591, key10010);
    let tmp2 = !tmp14Result && tmp12(15569)(tmp, key10010);
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
    if (_mod15569(tmp, tmp7)) {
      let tmp5Result = tmp5(15592);
      if (!(~tmp5Result.indexOf(items, tmp7))) {
        let tmp10 = closure_2(items, tmp7);
      }
    }
  }
  return items;
};
