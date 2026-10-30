// Module ID: 12789
// Function ID: 12790
// Dependencies: [12790, 12833, 12880, 12908, 12909]

// Module 12789
import _mod12908 from "module_12908" /* 12908 */;
import _mod12909 from "module_12909" /* 12909 */;
import create_mod from "module_12790" /* 12790 */;
import module_12833 from "module_12833" /* 12833 */;
import module_12880 from "module_12880" /* 12880 */;

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
module.exports.version = _mod12909.version;

export default create(merge(module_12833, module_12880, _mod12908));
