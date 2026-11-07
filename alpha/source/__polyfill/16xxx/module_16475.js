// Module ID: 16475
// Function ID: 16476
// Dependencies: [16438, 16436, 16454, 16476, 16477]

// Module 16475
import _mod16436 from "module_16436" /* 16436 */;
import _mod16438 from "module_16438" /* 16438 */;
import _mod16454 from "module_16454" /* 16454 */;
import _mod16476 from "module_16476" /* 16476 */;

let closure_2 = _mod16438([].push);

export default (arg0, arg1) => {
  let num;
  const tmp = _mod16436(arg0);
  const items = [];
  for (const key10010 in tmp) {
    let tmp12 = require;
    let tmp14 = _mod16454;
    let tmp14Result = tmp14(_mod16476, key10010);
    let tmp2 = !tmp14Result && tmp12(16454)(tmp, key10010);
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
    if (_mod16454(tmp, tmp7)) {
      let tmp5Result = tmp5(16477);
      if (!(~tmp5Result.indexOf(items, tmp7))) {
        let tmp10 = closure_2(items, tmp7);
      }
    }
  }
  return items;
};
