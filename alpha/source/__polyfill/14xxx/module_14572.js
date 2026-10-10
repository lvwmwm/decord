// Module ID: 14572
// Function ID: 14573
// Dependencies: [14535, 14533, 14551, 14573, 14574]

// Module 14572
import _mod14533 from "module_14533" /* 14533 */;
import _mod14535 from "module_14535" /* 14535 */;
import _mod14551 from "module_14551" /* 14551 */;
import _mod14573 from "module_14573" /* 14573 */;

let closure_2 = _mod14535([].push);

export default (arg0, arg1) => {
  let num;
  const tmp = _mod14533(arg0);
  const items = [];
  for (const key10010 in tmp) {
    let tmp12 = require;
    let tmp14 = _mod14551;
    let tmp14Result = tmp14(_mod14573, key10010);
    let tmp2 = !tmp14Result && tmp12(14551)(tmp, key10010);
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
    if (_mod14551(tmp, tmp7)) {
      let tmp5Result = tmp5(14574);
      if (!(~tmp5Result.indexOf(items, tmp7))) {
        let tmp10 = closure_2(items, tmp7);
      }
    }
  }
  return items;
};
