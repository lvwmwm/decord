// Module ID: 15725
// Function ID: 15726
// Dependencies: [15688, 15686, 15704, 15726, 15727]

// Module 15725
import _mod15686 from "module_15686" /* 15686 */;
import _mod15688 from "module_15688" /* 15688 */;
import _mod15704 from "module_15704" /* 15704 */;
import _mod15726 from "module_15726" /* 15726 */;

let closure_2 = _mod15688([].push);

export default (arg0, arg1) => {
  let num;
  const tmp = _mod15686(arg0);
  const items = [];
  for (const key10010 in tmp) {
    let tmp12 = require;
    let tmp14 = _mod15704;
    let tmp14Result = tmp14(_mod15726, key10010);
    let tmp2 = !tmp14Result && tmp12(15704)(tmp, key10010);
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
    if (_mod15704(tmp, tmp7)) {
      let tmp5Result = tmp5(15727);
      if (!(~tmp5Result.indexOf(items, tmp7))) {
        let tmp10 = closure_2(items, tmp7);
      }
    }
  }
  return items;
};
