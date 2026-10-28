// Module ID: 15851
// Function ID: 15852
// Dependencies: [15814, 15812, 15830, 15852, 15853]

// Module 15851
import _mod15812 from "module_15812" /* 15812 */;
import _mod15814 from "module_15814" /* 15814 */;
import _mod15830 from "module_15830" /* 15830 */;
import _mod15852 from "module_15852" /* 15852 */;

let closure_2 = _mod15814([].push);

export default (arg0, arg1) => {
  let num;
  const tmp = _mod15812(arg0);
  const items = [];
  for (const key10010 in tmp) {
    let tmp12 = require;
    let tmp14 = _mod15830;
    let tmp14Result = tmp14(_mod15852, key10010);
    let tmp2 = !tmp14Result && tmp12(15830)(tmp, key10010);
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
    if (_mod15830(tmp, tmp7)) {
      let tmp5Result = tmp5(15853);
      if (!(~tmp5Result.indexOf(items, tmp7))) {
        let tmp10 = closure_2(items, tmp7);
      }
    }
  }
  return items;
};
