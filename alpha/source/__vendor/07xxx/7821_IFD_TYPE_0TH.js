// Module ID: 7821
// Function ID: 7822
// Name: IFD_TYPE_0TH
// Dependencies: [7800, 7822, 7824, 7826, 7827, 7803, 7828, 7829, 7830]

// Module 7821 (IFD_TYPE_0TH)
import _modDef7803 from "module_7803" /* 7803 */;
import _modDef7824 from "module_7824" /* 7824 */;
import _modDef7826 from "module_7826" /* 7826 */;
import _modDef7827 from "module_7827" /* 7827 */;
import _modDef7828 from "module_7828" /* 7828 */;
import _modDef7829 from "module_7829" /* 7829 */;
import _modDef7830 from "module_7830" /* 7830 */;
import module_7800 from "module_7800" /* 7800 */;
import module_7822 from "module_7822" /* 7822 */;

let importDefaultResult1;
let importDefaultResult2;
let importDefaultResult3;
const objectAssign = module_7800.objectAssign;
const objectAssignResult = objectAssign({}, module_7822, _modDef7824);
const obj = { "0th": objectAssignResult, "1st": module_7822, exif: objectAssignResult, gps: _modDef7826, interoperability: _modDef7827, mpf: importDefaultResult1, canon: importDefaultResult2, pentax: importDefaultResult3 };
if (_modDef7803.USE_MPF) {
  importDefaultResult1 = _modDef7828;
} else {
  importDefaultResult1 = {};
}
if (_modDef7803.USE_MAKER_NOTES) {
  importDefaultResult2 = _modDef7829;
} else {
  importDefaultResult2 = {};
}
if (_modDef7803.USE_MAKER_NOTES) {
  importDefaultResult3 = _modDef7830;
} else {
  importDefaultResult3 = {};
}

export default obj;
export const IFD_TYPE_0TH = "0th";
export const IFD_TYPE_1ST = "1st";
export const IFD_TYPE_EXIF = "exif";
export const IFD_TYPE_GPS = "gps";
export const IFD_TYPE_INTEROPERABILITY = "interoperability";
export const IFD_TYPE_MPF = "mpf";
export const IFD_TYPE_CANON = "canon";
export const IFD_TYPE_PENTAX = "pentax";
