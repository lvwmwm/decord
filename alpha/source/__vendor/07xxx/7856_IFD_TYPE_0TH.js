// Module ID: 7856
// Function ID: 7857
// Name: IFD_TYPE_0TH
// Dependencies: [7835, 7857, 7859, 7861, 7862, 7838, 7863, 7864, 7865]

// Module 7856 (IFD_TYPE_0TH)
import _modDef7838 from "module_7838" /* 7838 */;
import _modDef7859 from "module_7859" /* 7859 */;
import _modDef7861 from "module_7861" /* 7861 */;
import _modDef7862 from "module_7862" /* 7862 */;
import _modDef7863 from "module_7863" /* 7863 */;
import _modDef7864 from "module_7864" /* 7864 */;
import _modDef7865 from "module_7865" /* 7865 */;
import module_7835 from "module_7835" /* 7835 */;
import module_7857 from "module_7857" /* 7857 */;

let importDefaultResult1;
let importDefaultResult2;
let importDefaultResult3;
const objectAssign = module_7835.objectAssign;
const objectAssignResult = objectAssign({}, module_7857, _modDef7859);
const obj = { "0th": objectAssignResult, "1st": module_7857, exif: objectAssignResult, gps: _modDef7861, interoperability: _modDef7862, mpf: importDefaultResult1, canon: importDefaultResult2, pentax: importDefaultResult3 };
if (_modDef7838.USE_MPF) {
  importDefaultResult1 = _modDef7863;
} else {
  importDefaultResult1 = {};
}
if (_modDef7838.USE_MAKER_NOTES) {
  importDefaultResult2 = _modDef7864;
} else {
  importDefaultResult2 = {};
}
if (_modDef7838.USE_MAKER_NOTES) {
  importDefaultResult3 = _modDef7865;
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
