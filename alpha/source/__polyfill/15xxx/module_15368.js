// Module ID: 15368
// Function ID: 15369
// Dependencies: [15331, 15329, 15347, 15369, 15370]

// Module 15368
import _mod15329 from "module_15329" /* 15329 */;
import _mod15331 from "module_15331" /* 15331 */;
import _mod15347 from "module_15347" /* 15347 */;
import _mod15369 from "module_15369" /* 15369 */;

let closure_2 = _mod15331([].push);

export default (arg0, arg1) => {
  let num;
  const tmp = _mod15329(arg0);
  const items = [];
  for (const key10010 in tmp) {
    let tmp12 = require;
    let tmp14 = _mod15347;
    let tmp14Result = tmp14(_mod15369, key10010);
    let tmp2 = !tmp14Result && tmp12(15347)(tmp, key10010);
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
    if (_mod15347(tmp, tmp7)) {
      let tmp5Result = tmp5(15370);
      if (!(~tmp5Result.indexOf(items, tmp7))) {
        let tmp10 = closure_2(items, tmp7);
      }
    }
  }
  return items;
};
