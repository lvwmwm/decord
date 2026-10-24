// Module ID: 8811
// Function ID: 8812
// Name: normalizeColor
// Dependencies: [8802, 5010]

// Module 8811 (normalizeColor)
import normalizeColor from "normalizeColor" /* 8802 */;
import module_5010_mod from "module_5010" /* 5010 */;

let module_5010;
let size;
const obj = { shadowColor: normalizeColor, shadowOffset: module_5010.shape(size), shadowOpacity: module_5010.number, shadowRadius: module_5010.number };
module_5010 = module_5010_mod;
size = { width: module_5010.number, height: module_5010.number };

export default obj;
