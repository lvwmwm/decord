// Module ID: 16485
// Function ID: 16486
// Dependencies: [16448, 16446, 16464, 16486, 16487]

// Module 16485
import _mod16446 from "module_16446" /* 16446 */;
import _mod16448 from "module_16448" /* 16448 */;
import _mod16464 from "module_16464" /* 16464 */;
import _mod16486 from "module_16486" /* 16486 */;

let closure_2 = _mod16448([].push);

export default (arg0, arg1) => {
  let num;
  const tmp = _mod16446(arg0);
  const items = [];
  for (const key10010 in tmp) {
    let tmp12 = require;
    let tmp14 = _mod16464;
    let tmp14Result = tmp14(_mod16486, key10010);
    let tmp2 = !tmp14Result && tmp12(16464)(tmp, key10010);
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
    if (_mod16464(tmp, tmp7)) {
      let tmp5Result = tmp5(16487);
      if (!(~tmp5Result.indexOf(items, tmp7))) {
        let tmp10 = closure_2(items, tmp7);
      }
    }
  }
  return items;
};
