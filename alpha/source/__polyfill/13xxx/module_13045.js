// Module ID: 13045
// Function ID: 13046
// Dependencies: [13046, 13089, 13136, 13164, 13165]

// Module 13045
import _mod13164 from "module_13164" /* 13164 */;
import _mod13165 from "module_13165" /* 13165 */;
import create_mod from "module_13046" /* 13046 */;
import module_13089 from "module_13089" /* 13089 */;
import module_13136 from "module_13136" /* 13136 */;

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
module.exports.version = _mod13165.version;

export default create(merge(module_13089, module_13136, _mod13164));
