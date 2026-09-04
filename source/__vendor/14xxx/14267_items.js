// Module ID: 14267
// Function ID: 14268
// Name: items
// Dependencies: [14230, 14228, 14246, 14268, 14269]

// Module 14267 (items)
import _mod14228 from "module_14228" /* 14228 */;
import call from "call" /* 14230 */;
import call2 from "call" /* 14246 */;
import _mod14268 from "module_14268" /* 14268 */;

let closure_2 = call([].push);

export default (arg0, arg1) => {
  const tmp = _mod14228(arg0);
  const items = [];
  for (const key10010 in tmp) {
    let tmp11 = key10010;
    let tmp12 = require;
    let tmp13 = dependencyMap;
    let tmp14 = call2;
    let tmp14Result = tmp14(_mod14268, key10010);
    let tmp2 = !tmp14Result;
    if (!tmp14Result) {
      tmp2 = tmp12(14246)(tmp, key10010);
    }
    if (!tmp2) {
      continue;
    } else {
      let tmp3 = callback;
      let tmp4 = callback(items, key10010);
      continue;
    }
    continue;
  }
  for (let num = 0; arg1.length > num; num = num + 1) {
    let tmp5 = require;
    let tmp6 = dependencyMap;
    let tmp7 = arg1[num];
    let tmp8 = num;
    if (call2(tmp, tmp7)) {
      let tmp5Result = tmp5(14269);
      if (!~tmp5Result.indexOf(items, tmp7)) {
        let tmp9 = callback;
        let tmp10 = callback(items, tmp7);
      }
    }
  }
  return items;
};
