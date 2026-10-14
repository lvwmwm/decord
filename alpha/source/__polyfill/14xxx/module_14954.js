// Module ID: 14954
// Function ID: 14955
// Dependencies: [14917, 14915, 14933, 14955, 14956]

// Module 14954
import _mod14915 from "module_14915" /* 14915 */;
import _mod14917 from "module_14917" /* 14917 */;
import _mod14933 from "module_14933" /* 14933 */;
import _mod14955 from "module_14955" /* 14955 */;

let closure_2 = _mod14917([].push);

export default (arg0, arg1) => {
  let num;
  const tmp = _mod14915(arg0);
  const items = [];
  for (const key10010 in tmp) {
    let tmp12 = require;
    let tmp14 = _mod14933;
    let tmp14Result = tmp14(_mod14955, key10010);
    let tmp2 = !tmp14Result && tmp12(14933)(tmp, key10010);
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
    if (_mod14933(tmp, tmp7)) {
      let tmp5Result = tmp5(14956);
      if (!(~tmp5Result.indexOf(items, tmp7))) {
        let tmp10 = closure_2(items, tmp7);
      }
    }
  }
  return items;
};
