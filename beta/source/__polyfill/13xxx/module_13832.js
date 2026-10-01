// Module ID: 13832
// Function ID: 13833
// Dependencies: [13795, 13793, 13811, 13833, 13834]

// Module 13832
import _mod13793 from "module_13793" /* 13793 */;
import _mod13795 from "module_13795" /* 13795 */;
import _mod13811 from "module_13811" /* 13811 */;
import _mod13833 from "module_13833" /* 13833 */;

let closure_2 = _mod13795([].push);

export default (arg0, arg1) => {
  let num;
  const tmp = _mod13793(arg0);
  const items = [];
  for (const key10010 in tmp) {
    let tmp12 = require;
    let tmp14 = _mod13811;
    let tmp14Result = tmp14(_mod13833, key10010);
    let tmp2 = !tmp14Result && tmp12(13811)(tmp, key10010);
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
    if (_mod13811(tmp, tmp7)) {
      let tmp5Result = tmp5(13834);
      if (!(~tmp5Result.indexOf(items, tmp7))) {
        let tmp10 = closure_2(items, tmp7);
      }
    }
  }
  return items;
};
