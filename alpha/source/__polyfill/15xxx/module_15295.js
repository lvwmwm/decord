// Module ID: 15295
// Function ID: 15296
// Dependencies: [15258, 15256, 15274, 15296, 15297]

// Module 15295
import _mod15256 from "module_15256" /* 15256 */;
import _mod15258 from "module_15258" /* 15258 */;
import _mod15274 from "module_15274" /* 15274 */;
import _mod15296 from "module_15296" /* 15296 */;

let closure_2 = _mod15258([].push);

export default (arg0, arg1) => {
  let num;
  const tmp = _mod15256(arg0);
  const items = [];
  for (const key10010 in tmp) {
    let tmp12 = require;
    let tmp14 = _mod15274;
    let tmp14Result = tmp14(_mod15296, key10010);
    let tmp2 = !tmp14Result && tmp12(15274)(tmp, key10010);
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
    if (_mod15274(tmp, tmp7)) {
      let tmp5Result = tmp5(15297);
      if (!(~tmp5Result.indexOf(items, tmp7))) {
        let tmp10 = closure_2(items, tmp7);
      }
    }
  }
  return items;
};
