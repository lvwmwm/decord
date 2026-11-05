// Module ID: 16430
// Function ID: 16431
// Dependencies: [16393, 16391, 16409, 16431, 16432]

// Module 16430
import _mod16391 from "module_16391" /* 16391 */;
import _mod16393 from "module_16393" /* 16393 */;
import _mod16409 from "module_16409" /* 16409 */;
import _mod16431 from "module_16431" /* 16431 */;

let closure_2 = _mod16393([].push);

export default (arg0, arg1) => {
  let num;
  const tmp = _mod16391(arg0);
  const items = [];
  for (const key10010 in tmp) {
    let tmp12 = require;
    let tmp14 = _mod16409;
    let tmp14Result = tmp14(_mod16431, key10010);
    let tmp2 = !tmp14Result && tmp12(16409)(tmp, key10010);
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
    if (_mod16409(tmp, tmp7)) {
      let tmp5Result = tmp5(16432);
      if (!(~tmp5Result.indexOf(items, tmp7))) {
        let tmp10 = closure_2(items, tmp7);
      }
    }
  }
  return items;
};
