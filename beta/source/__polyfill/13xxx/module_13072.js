// Module ID: 13072
// Function ID: 13073
// Dependencies: [13073, 13116, 13163, 13191, 13192]

// Module 13072
import _mod13191 from "module_13191" /* 13191 */;
import _mod13192 from "module_13192" /* 13192 */;
import create_mod from "module_13073" /* 13073 */;
import module_13116 from "module_13116" /* 13116 */;
import module_13163 from "module_13163" /* 13163 */;

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
module.exports.version = _mod13192.version;

export default create(merge(module_13116, module_13163, _mod13191));
