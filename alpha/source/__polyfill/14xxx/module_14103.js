// Module ID: 14103
// Function ID: 14104
// Dependencies: [14066, 14064, 14082, 14104, 14105]

// Module 14103
import _mod14064 from "module_14064" /* 14064 */;
import _mod14066 from "module_14066" /* 14066 */;
import _mod14082 from "module_14082" /* 14082 */;
import _mod14104 from "module_14104" /* 14104 */;

let closure_2 = _mod14066([].push);

export default (arg0, arg1) => {
  let num;
  const tmp = _mod14064(arg0);
  const items = [];
  for (const key10010 in tmp) {
    let tmp12 = require;
    let tmp14 = _mod14082;
    let tmp14Result = tmp14(_mod14104, key10010);
    let tmp2 = !tmp14Result && tmp12(14082)(tmp, key10010);
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
    if (_mod14082(tmp, tmp7)) {
      let tmp5Result = tmp5(14105);
      if (!(~tmp5Result.indexOf(items, tmp7))) {
        let tmp10 = closure_2(items, tmp7);
      }
    }
  }
  return items;
};
