// Module ID: 16427
// Function ID: 16428
// Dependencies: [16390, 16388, 16406, 16428, 16429]

// Module 16427
import _mod16388 from "module_16388" /* 16388 */;
import _mod16390 from "module_16390" /* 16390 */;
import _mod16406 from "module_16406" /* 16406 */;
import _mod16428 from "module_16428" /* 16428 */;

let closure_2 = _mod16390([].push);

export default (arg0, arg1) => {
  let num;
  const tmp = _mod16388(arg0);
  const items = [];
  for (const key10010 in tmp) {
    let tmp12 = require;
    let tmp14 = _mod16406;
    let tmp14Result = tmp14(_mod16428, key10010);
    let tmp2 = !tmp14Result && tmp12(16406)(tmp, key10010);
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
    if (_mod16406(tmp, tmp7)) {
      let tmp5Result = tmp5(16429);
      if (!(~tmp5Result.indexOf(items, tmp7))) {
        let tmp10 = closure_2(items, tmp7);
      }
    }
  }
  return items;
};
