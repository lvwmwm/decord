// Module ID: 16226
// Function ID: 16227
// Dependencies: [16227, 16270, 16317, 16345, 16346]

// Module 16226
import _mod16345 from "module_16345" /* 16345 */;
import _mod16346 from "module_16346" /* 16346 */;
import create_mod from "module_16227" /* 16227 */;
import module_16270 from "module_16270" /* 16270 */;
import module_16317 from "module_16317" /* 16317 */;

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
module.exports.version = _mod16346.version;

export default create(merge(module_16270, module_16317, _mod16345));
