// Module ID: 13721
// Function ID: 13722
// Dependencies: [13722, 13765, 13812, 13840, 13841]

// Module 13721
import _mod13840 from "module_13840" /* 13840 */;
import _mod13841 from "module_13841" /* 13841 */;
import create_mod from "module_13722" /* 13722 */;
import module_13765 from "module_13765" /* 13765 */;
import module_13812 from "module_13812" /* 13812 */;

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
module.exports.version = _mod13841.version;

export default create(merge(module_13765, module_13812, _mod13840));
