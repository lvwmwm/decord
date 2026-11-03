// Module ID: 12963
// Function ID: 12964
// Dependencies: [12964, 13007, 13054, 13082, 13083]

// Module 12963
import _mod13082 from "module_13082" /* 13082 */;
import _mod13083 from "module_13083" /* 13083 */;
import create_mod from "module_12964" /* 12964 */;
import module_13007 from "module_13007" /* 13007 */;
import module_13054 from "module_13054" /* 13054 */;

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
module.exports.version = _mod13083.version;

export default create(merge(module_13007, module_13054, _mod13082));
