// Module ID: 15580
// Function ID: 15581
// Dependencies: [15543, 15541, 15559, 15581, 15582]

// Module 15580
import _mod15541 from "module_15541" /* 15541 */;
import _mod15543 from "module_15543" /* 15543 */;
import _mod15559 from "module_15559" /* 15559 */;
import _mod15581 from "module_15581" /* 15581 */;

let closure_2 = _mod15543([].push);

export default (arg0, arg1) => {
  let num;
  const tmp = _mod15541(arg0);
  const items = [];
  for (const key10010 in tmp) {
    let tmp12 = require;
    let tmp14 = _mod15559;
    let tmp14Result = tmp14(_mod15581, key10010);
    let tmp2 = !tmp14Result && tmp12(15559)(tmp, key10010);
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
    if (_mod15559(tmp, tmp7)) {
      let tmp5Result = tmp5(15582);
      if (!(~tmp5Result.indexOf(items, tmp7))) {
        let tmp10 = closure_2(items, tmp7);
      }
    }
  }
  return items;
};
