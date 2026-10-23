// Module ID: 8809
// Function ID: 8810
// Name: normalizeColor
// Dependencies: [8800, 5008]

// Module 8809 (normalizeColor)
import normalizeColor from "normalizeColor" /* 8800 */;
import module_5008_mod from "module_5008" /* 5008 */;

let module_5008;
let size;
const obj = { shadowColor: normalizeColor, shadowOffset: module_5008.shape(size), shadowOpacity: module_5008.number, shadowRadius: module_5008.number };
module_5008 = module_5008_mod;
size = { width: module_5008.number, height: module_5008.number };

export default obj;
