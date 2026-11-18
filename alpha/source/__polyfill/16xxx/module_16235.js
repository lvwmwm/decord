// Module ID: 16235
// Function ID: 16236
// Dependencies: [16236, 16279, 16326, 16354, 16355]

// Module 16235
import _mod16354 from "module_16354" /* 16354 */;
import _mod16355 from "module_16355" /* 16355 */;
import create_mod from "module_16236" /* 16236 */;
import module_16279 from "module_16279" /* 16279 */;
import module_16326 from "module_16326" /* 16326 */;

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
module.exports.version = _mod16355.version;

export default create(merge(module_16279, module_16326, _mod16354));
