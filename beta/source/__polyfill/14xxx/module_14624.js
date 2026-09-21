// Module ID: 14624
// Function ID: 14625
// Dependencies: [14587, 14585, 14603, 14625, 14626]

// Module 14624
import _mod14585 from "module_14585" /* 14585 */;
import _mod14587 from "module_14587" /* 14587 */;
import _mod14603 from "module_14603" /* 14603 */;
import _mod14625 from "module_14625" /* 14625 */;

let closure_2 = _mod14587([].push);

export default (arg0, arg1) => {
  const tmp = _mod14585(arg0);
  const items = [];
  for (const key10010 in tmp) {
    let tmp12 = require;
    let tmp14 = _mod14603;
    let tmp14Result = tmp14(_mod14625, key10010);
    let tmp2 = !tmp14Result;
    if (!tmp14Result) {
      tmp2 = tmp12(14603)(tmp, key10010);
    }
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
    if (_mod14603(tmp, tmp7)) {
      let tmp5Result = tmp5(14626);
      if (!~tmp5Result.indexOf(items, tmp7)) {
        let tmp10 = closure_2(items, tmp7);
      }
    }
  }
  return items;
};
