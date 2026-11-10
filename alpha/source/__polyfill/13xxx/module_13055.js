// Module ID: 13055
// Function ID: 13056
// Dependencies: [13056, 13099, 13146, 13174, 13175]

// Module 13055
import _mod13174 from "module_13174" /* 13174 */;
import _mod13175 from "module_13175" /* 13175 */;
import create_mod from "module_13056" /* 13056 */;
import module_13099 from "module_13099" /* 13099 */;
import module_13146 from "module_13146" /* 13146 */;

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
module.exports.version = _mod13175.version;

export default create(merge(module_13099, module_13146, _mod13174));
