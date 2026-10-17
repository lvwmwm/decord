// Module ID: 15364
// Function ID: 15365
// Dependencies: [15327, 15325, 15343, 15365, 15366]

// Module 15364
import _mod15325 from "module_15325" /* 15325 */;
import _mod15327 from "module_15327" /* 15327 */;
import _mod15343 from "module_15343" /* 15343 */;
import _mod15365 from "module_15365" /* 15365 */;

let closure_2 = _mod15327([].push);

export default (arg0, arg1) => {
  let num;
  const tmp = _mod15325(arg0);
  const items = [];
  for (const key10010 in tmp) {
    let tmp12 = require;
    let tmp14 = _mod15343;
    let tmp14Result = tmp14(_mod15365, key10010);
    let tmp2 = !tmp14Result && tmp12(15343)(tmp, key10010);
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
    if (_mod15343(tmp, tmp7)) {
      let tmp5Result = tmp5(15366);
      if (!(~tmp5Result.indexOf(items, tmp7))) {
        let tmp10 = closure_2(items, tmp7);
      }
    }
  }
  return items;
};
