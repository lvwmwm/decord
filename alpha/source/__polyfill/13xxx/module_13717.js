// Module ID: 13717
// Function ID: 13718
// Dependencies: [13718, 13761, 13808, 13836, 13837]

// Module 13717
import _mod13836 from "module_13836" /* 13836 */;
import _mod13837 from "module_13837" /* 13837 */;
import create_mod from "module_13718" /* 13718 */;
import module_13761 from "module_13761" /* 13761 */;
import module_13808 from "module_13808" /* 13808 */;

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
module.exports.version = _mod13837.version;

export default create(merge(module_13761, module_13808, _mod13836));
