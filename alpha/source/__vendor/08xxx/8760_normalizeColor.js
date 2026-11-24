// Module ID: 8760
// Function ID: 8761
// Name: normalizeColor
// Dependencies: [8751, 4958]

// Module 8760 (normalizeColor)
import normalizeColor from "normalizeColor" /* 8751 */;
import module_4958_mod from "module_4958" /* 4958 */;

let module_4958;
let size;
const obj = { shadowColor: normalizeColor, shadowOffset: module_4958.shape(size), shadowOpacity: module_4958.number, shadowRadius: module_4958.number };
module_4958 = module_4958_mod;
size = { width: module_4958.number, height: module_4958.number };

export default obj;
