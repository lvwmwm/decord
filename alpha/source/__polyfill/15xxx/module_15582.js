// Module ID: 15582
// Function ID: 15583
// Dependencies: [15545, 15543, 15561, 15583, 15584]

// Module 15582
import _mod15543 from "module_15543" /* 15543 */;
import _mod15545 from "module_15545" /* 15545 */;
import _mod15561 from "module_15561" /* 15561 */;
import _mod15583 from "module_15583" /* 15583 */;

let closure_2 = _mod15545([].push);

export default (arg0, arg1) => {
  let num;
  const tmp = _mod15543(arg0);
  const items = [];
  for (const key10010 in tmp) {
    let tmp12 = require;
    let tmp14 = _mod15561;
    let tmp14Result = tmp14(_mod15583, key10010);
    let tmp2 = !tmp14Result && tmp12(15561)(tmp, key10010);
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
    if (_mod15561(tmp, tmp7)) {
      let tmp5Result = tmp5(15584);
      if (!(~tmp5Result.indexOf(items, tmp7))) {
        let tmp10 = closure_2(items, tmp7);
      }
    }
  }
  return items;
};
