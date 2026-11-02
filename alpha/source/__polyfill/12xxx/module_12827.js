// Module ID: 12827
// Function ID: 12828
// Dependencies: [12828, 12871, 12918, 12946, 12947]

// Module 12827
import _mod12946 from "module_12946" /* 12946 */;
import _mod12947 from "module_12947" /* 12947 */;
import create_mod from "module_12828" /* 12828 */;
import module_12871 from "module_12871" /* 12871 */;
import module_12918 from "module_12918" /* 12918 */;

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
module.exports.version = _mod12947.version;

export default create(merge(module_12871, module_12918, _mod12946));
