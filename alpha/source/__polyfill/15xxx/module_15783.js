// Module ID: 15783
// Function ID: 15784
// Dependencies: [15746, 15744, 15762, 15784, 15785]

// Module 15783
import _mod15744 from "module_15744" /* 15744 */;
import _mod15746 from "module_15746" /* 15746 */;
import _mod15762 from "module_15762" /* 15762 */;
import _mod15784 from "module_15784" /* 15784 */;

let closure_2 = _mod15746([].push);

export default (arg0, arg1) => {
  let num;
  const tmp = _mod15744(arg0);
  const items = [];
  for (const key10010 in tmp) {
    let tmp12 = require;
    let tmp14 = _mod15762;
    let tmp14Result = tmp14(_mod15784, key10010);
    let tmp2 = !tmp14Result && tmp12(15762)(tmp, key10010);
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
    if (_mod15762(tmp, tmp7)) {
      let tmp5Result = tmp5(15785);
      if (!(~tmp5Result.indexOf(items, tmp7))) {
        let tmp10 = closure_2(items, tmp7);
      }
    }
  }
  return items;
};
