// Module ID: 7844
// Function ID: 7845
// Name: IFD_TYPE_0TH
// Dependencies: [7823, 7845, 7847, 7849, 7850, 7826, 7851, 7852, 7853]

// Module 7844 (IFD_TYPE_0TH)
import _modDef7826 from "module_7826" /* 7826 */;
import _modDef7847 from "module_7847" /* 7847 */;
import _modDef7849 from "module_7849" /* 7849 */;
import _modDef7850 from "module_7850" /* 7850 */;
import _modDef7851 from "module_7851" /* 7851 */;
import _modDef7852 from "module_7852" /* 7852 */;
import _modDef7853 from "module_7853" /* 7853 */;
import module_7823 from "module_7823" /* 7823 */;
import module_7845 from "module_7845" /* 7845 */;

let importDefaultResult1;
let importDefaultResult2;
let importDefaultResult3;
const objectAssign = module_7823.objectAssign;
const objectAssignResult = objectAssign({}, module_7845, _modDef7847);
const obj = { "0th": objectAssignResult, "1st": module_7845, exif: objectAssignResult, gps: _modDef7849, interoperability: _modDef7850, mpf: importDefaultResult1, canon: importDefaultResult2, pentax: importDefaultResult3 };
if (_modDef7826.USE_MPF) {
  importDefaultResult1 = _modDef7851;
} else {
  importDefaultResult1 = {};
}
if (_modDef7826.USE_MAKER_NOTES) {
  importDefaultResult2 = _modDef7852;
} else {
  importDefaultResult2 = {};
}
if (_modDef7826.USE_MAKER_NOTES) {
  importDefaultResult3 = _modDef7853;
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
