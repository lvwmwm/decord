// Module ID: 12648
// Function ID: 12649
// Dependencies: [12649, 12692, 12739, 12767, 12768]

// Module 12648
import _mod12767 from "module_12767" /* 12767 */;
import _mod12768 from "module_12768" /* 12768 */;
import create_mod from "module_12649" /* 12649 */;
import module_12692 from "module_12692" /* 12692 */;
import module_12739 from "module_12739" /* 12739 */;

function merge() {
  let num;
  const obj = {};
  for (let num = 0; num < arguments.length; num = num + 1) {
    let tmp = arguments[num];
    for (const key10011 in tmp) {
      obj[key10011] = tmp[key10011];
      continue;
    }
  }
  return obj;
}
let create = create_mod;
create = create.create;
module.exports.version = _mod12768.version;

export default create(merge(module_12692, module_12739, _mod12767));
