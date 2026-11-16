// Module ID: 13822
// Function ID: 13823
// Dependencies: [13823, 13866, 13913, 13941, 13942]

// Module 13822
import _mod13941 from "module_13941" /* 13941 */;
import _mod13942 from "module_13942" /* 13942 */;
import create_mod from "module_13823" /* 13823 */;
import module_13866 from "module_13866" /* 13866 */;
import module_13913 from "module_13913" /* 13913 */;

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
module.exports.version = _mod13942.version;

export default create(merge(module_13866, module_13913, _mod13941));
