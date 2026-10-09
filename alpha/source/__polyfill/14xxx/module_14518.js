// Module ID: 14518
// Function ID: 14519
// Dependencies: [14481, 14479, 14497, 14519, 14520]

// Module 14518
import _mod14479 from "module_14479" /* 14479 */;
import _mod14481 from "module_14481" /* 14481 */;
import _mod14497 from "module_14497" /* 14497 */;
import _mod14519 from "module_14519" /* 14519 */;

let closure_2 = _mod14481([].push);

export default (arg0, arg1) => {
  let num;
  const tmp = _mod14479(arg0);
  const items = [];
  for (const key10010 in tmp) {
    let tmp12 = require;
    let tmp14 = _mod14497;
    let tmp14Result = tmp14(_mod14519, key10010);
    let tmp2 = !tmp14Result && tmp12(14497)(tmp, key10010);
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
    if (_mod14497(tmp, tmp7)) {
      let tmp5Result = tmp5(14520);
      if (!(~tmp5Result.indexOf(items, tmp7))) {
        let tmp10 = closure_2(items, tmp7);
      }
    }
  }
  return items;
};
