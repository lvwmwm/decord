// Module ID: 15486
// Function ID: 15487
// Dependencies: [15449, 15447, 15465, 15487, 15488]

// Module 15486
import _mod15447 from "module_15447" /* 15447 */;
import _mod15449 from "module_15449" /* 15449 */;
import _mod15465 from "module_15465" /* 15465 */;
import _mod15487 from "module_15487" /* 15487 */;

let closure_2 = _mod15449([].push);

export default (arg0, arg1) => {
  let num;
  const tmp = _mod15447(arg0);
  const items = [];
  for (const key10010 in tmp) {
    let tmp12 = require;
    let tmp14 = _mod15465;
    let tmp14Result = tmp14(_mod15487, key10010);
    let tmp2 = !tmp14Result && tmp12(15465)(tmp, key10010);
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
    if (_mod15465(tmp, tmp7)) {
      let tmp5Result = tmp5(15488);
      if (!(~tmp5Result.indexOf(items, tmp7))) {
        let tmp10 = closure_2(items, tmp7);
      }
    }
  }
  return items;
};
