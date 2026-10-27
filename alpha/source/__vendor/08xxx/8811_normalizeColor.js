// Module ID: 8811
// Function ID: 8812
// Name: normalizeColor
// Dependencies: [8802, 5011]

// Module 8811 (normalizeColor)
import normalizeColor from "normalizeColor" /* 8802 */;
import module_5011_mod from "module_5011" /* 5011 */;

let module_5011;
let size;
const obj = { shadowColor: normalizeColor, shadowOffset: module_5011.shape(size), shadowOpacity: module_5011.number, shadowRadius: module_5011.number };
module_5011 = module_5011_mod;
size = { width: module_5011.number, height: module_5011.number };

export default obj;
