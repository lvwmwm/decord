// Module ID: 13824
// Function ID: 13825
// Dependencies: [13825, 13868, 13915, 13943, 13944]

// Module 13824
import _mod13943 from "module_13943" /* 13943 */;
import _mod13944 from "module_13944" /* 13944 */;
import create_mod from "module_13825" /* 13825 */;
import module_13868 from "module_13868" /* 13868 */;
import module_13915 from "module_13915" /* 13915 */;

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
module.exports.version = _mod13944.version;

export default create(merge(module_13868, module_13915, _mod13943));
