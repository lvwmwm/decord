// Module ID: 8669
// Function ID: 8670
// Name: normalizeColor
// Dependencies: [8660, 5006]

// Module 8669 (normalizeColor)
import normalizeColor from "normalizeColor" /* 8660 */;
import module_5006_mod from "module_5006" /* 5006 */;

let module_5006;
let size;
const obj = { shadowColor: normalizeColor, shadowOffset: module_5006.shape(size), shadowOpacity: module_5006.number, shadowRadius: module_5006.number };
module_5006 = module_5006_mod;
size = { width: module_5006.number, height: module_5006.number };

export default obj;
