// Module ID: 13053
// Function ID: 13054
// Dependencies: [13054, 13097, 13144, 13172, 13173]

// Module 13053
import _mod13172 from "module_13172" /* 13172 */;
import _mod13173 from "module_13173" /* 13173 */;
import create_mod from "module_13054" /* 13054 */;
import module_13097 from "module_13097" /* 13097 */;
import module_13144 from "module_13144" /* 13144 */;

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
module.exports.version = _mod13173.version;

export default create(merge(module_13097, module_13144, _mod13172));
