// Module ID: 14843
// Function ID: 14844
// Dependencies: [14844, 14887, 14934, 14962, 14963]

// Module 14843
import _mod14962 from "module_14962" /* 14962 */;
import _mod14963 from "module_14963" /* 14963 */;
import create_mod from "module_14844" /* 14844 */;
import module_14887 from "module_14887" /* 14887 */;
import module_14934 from "module_14934" /* 14934 */;

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
module.exports.version = _mod14963.version;

export default create(merge(module_14887, module_14934, _mod14962));
