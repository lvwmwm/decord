// Module ID: 15603
// Function ID: 15604
// Dependencies: [15566, 15564, 15582, 15604, 15605]

// Module 15603
import _mod15564 from "module_15564" /* 15564 */;
import _mod15566 from "module_15566" /* 15566 */;
import _mod15582 from "module_15582" /* 15582 */;
import _mod15604 from "module_15604" /* 15604 */;

let closure_2 = _mod15566([].push);

export default (arg0, arg1) => {
  let num;
  const tmp = _mod15564(arg0);
  const items = [];
  for (const key10010 in tmp) {
    let tmp12 = require;
    let tmp14 = _mod15582;
    let tmp14Result = tmp14(_mod15604, key10010);
    let tmp2 = !tmp14Result && tmp12(15582)(tmp, key10010);
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
    if (_mod15582(tmp, tmp7)) {
      let tmp5Result = tmp5(15605);
      if (!(~tmp5Result.indexOf(items, tmp7))) {
        let tmp10 = closure_2(items, tmp7);
      }
    }
  }
  return items;
};
