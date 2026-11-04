// Module ID: 15623
// Function ID: 15624
// Dependencies: [15586, 15584, 15602, 15624, 15625]

// Module 15623
import _mod15584 from "module_15584" /* 15584 */;
import _mod15586 from "module_15586" /* 15586 */;
import _mod15602 from "module_15602" /* 15602 */;
import _mod15624 from "module_15624" /* 15624 */;

let closure_2 = _mod15586([].push);

export default (arg0, arg1) => {
  let num;
  const tmp = _mod15584(arg0);
  const items = [];
  for (const key10010 in tmp) {
    let tmp12 = require;
    let tmp14 = _mod15602;
    let tmp14Result = tmp14(_mod15624, key10010);
    let tmp2 = !tmp14Result && tmp12(15602)(tmp, key10010);
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
    if (_mod15602(tmp, tmp7)) {
      let tmp5Result = tmp5(15625);
      if (!(~tmp5Result.indexOf(items, tmp7))) {
        let tmp10 = closure_2(items, tmp7);
      }
    }
  }
  return items;
};
