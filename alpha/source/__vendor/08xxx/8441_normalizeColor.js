// Module ID: 8441
// Function ID: 8442
// Name: normalizeColor
// Dependencies: [8432, 4947]

// Module 8441 (normalizeColor)
import normalizeColor from "normalizeColor" /* 8432 */;
import module_4947_mod from "module_4947" /* 4947 */;

let module_4947;
let size;
const obj = { shadowColor: normalizeColor, shadowOffset: module_4947.shape(size), shadowOpacity: module_4947.number, shadowRadius: module_4947.number };
module_4947 = module_4947_mod;
size = { width: module_4947.number, height: module_4947.number };

export default obj;
