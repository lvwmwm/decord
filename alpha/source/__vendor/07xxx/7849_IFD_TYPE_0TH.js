// Module ID: 7849
// Function ID: 7850
// Name: IFD_TYPE_0TH
// Dependencies: [7828, 7850, 7852, 7854, 7855, 7831, 7856, 7857, 7858]

// Module 7849 (IFD_TYPE_0TH)
import _modDef7831 from "module_7831" /* 7831 */;
import _modDef7852 from "module_7852" /* 7852 */;
import _modDef7854 from "module_7854" /* 7854 */;
import _modDef7855 from "module_7855" /* 7855 */;
import _modDef7856 from "module_7856" /* 7856 */;
import _modDef7857 from "module_7857" /* 7857 */;
import _modDef7858 from "module_7858" /* 7858 */;
import module_7828 from "module_7828" /* 7828 */;
import module_7850 from "module_7850" /* 7850 */;

let importDefaultResult1;
let importDefaultResult2;
let importDefaultResult3;
const objectAssign = module_7828.objectAssign;
const objectAssignResult = objectAssign({}, module_7850, _modDef7852);
const obj = { "0th": objectAssignResult, "1st": module_7850, exif: objectAssignResult, gps: _modDef7854, interoperability: _modDef7855, mpf: importDefaultResult1, canon: importDefaultResult2, pentax: importDefaultResult3 };
if (_modDef7831.USE_MPF) {
  importDefaultResult1 = _modDef7856;
} else {
  importDefaultResult1 = {};
}
if (_modDef7831.USE_MAKER_NOTES) {
  importDefaultResult2 = _modDef7857;
} else {
  importDefaultResult2 = {};
}
if (_modDef7831.USE_MAKER_NOTES) {
  importDefaultResult3 = _modDef7858;
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
