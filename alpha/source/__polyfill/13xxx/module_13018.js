// Module ID: 13018
// Function ID: 13019
// Dependencies: [13019, 13062, 13109, 13137, 13138]

// Module 13018
import _mod13137 from "module_13137" /* 13137 */;
import _mod13138 from "module_13138" /* 13138 */;
import create_mod from "module_13019" /* 13019 */;
import module_13062 from "module_13062" /* 13062 */;
import module_13109 from "module_13109" /* 13109 */;

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
module.exports.version = _mod13138.version;

export default create(merge(module_13062, module_13109, _mod13137));
