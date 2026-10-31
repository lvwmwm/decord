// Module ID: 12824
// Function ID: 12825
// Dependencies: [12825, 12868, 12915, 12943, 12944]

// Module 12824
import _mod12943 from "module_12943" /* 12943 */;
import _mod12944 from "module_12944" /* 12944 */;
import create_mod from "module_12825" /* 12825 */;
import module_12868 from "module_12868" /* 12868 */;
import module_12915 from "module_12915" /* 12915 */;

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
module.exports.version = _mod12944.version;

export default create(merge(module_12868, module_12915, _mod12943));
