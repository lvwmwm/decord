// Module ID: 13041
// Function ID: 13042
// Dependencies: [13042, 13085, 13132, 13160, 13161]

// Module 13041
import _mod13160 from "module_13160" /* 13160 */;
import _mod13161 from "module_13161" /* 13161 */;
import create_mod from "module_13042" /* 13042 */;
import module_13085 from "module_13085" /* 13085 */;
import module_13132 from "module_13132" /* 13132 */;

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
module.exports.version = _mod13161.version;

export default create(merge(module_13085, module_13132, _mod13160));
