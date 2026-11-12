// Module ID: 13073
// Function ID: 13074
// Dependencies: [13074, 13117, 13164, 13192, 13193]

// Module 13073
import _mod13192 from "module_13192" /* 13192 */;
import _mod13193 from "module_13193" /* 13193 */;
import create_mod from "module_13074" /* 13074 */;
import module_13117 from "module_13117" /* 13117 */;
import module_13164 from "module_13164" /* 13164 */;

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
module.exports.version = _mod13193.version;

export default create(merge(module_13117, module_13164, _mod13192));
