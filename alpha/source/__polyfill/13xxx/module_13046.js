// Module ID: 13046
// Function ID: 13047
// Dependencies: [13047, 13090, 13137, 13165, 13166]

// Module 13046
import _mod13165 from "module_13165" /* 13165 */;
import _mod13166 from "module_13166" /* 13166 */;
import create_mod from "module_13047" /* 13047 */;
import module_13090 from "module_13090" /* 13090 */;
import module_13137 from "module_13137" /* 13137 */;

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
module.exports.version = _mod13166.version;

export default create(merge(module_13090, module_13137, _mod13165));
