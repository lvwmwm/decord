// Module ID: 8660
// Function ID: 8661
// Name: normalizeColor
// Dependencies: [8651, 5003]

// Module 8660 (normalizeColor)
import normalizeColor from "normalizeColor" /* 8651 */;
import module_5003_mod from "module_5003" /* 5003 */;

let module_5003;
let size;
const obj = { shadowColor: normalizeColor, shadowOffset: module_5003.shape(size), shadowOpacity: module_5003.number, shadowRadius: module_5003.number };
module_5003 = module_5003_mod;
size = { width: module_5003.number, height: module_5003.number };

export default obj;
