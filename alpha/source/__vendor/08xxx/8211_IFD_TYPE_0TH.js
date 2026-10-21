// Module ID: 8211
// Function ID: 8212
// Name: IFD_TYPE_0TH
// Dependencies: [8190, 8212, 8214, 8216, 8217, 8193, 8218, 8219, 8220]

// Module 8211 (IFD_TYPE_0TH)
import _modDef8193 from "module_8193" /* 8193 */;
import _modDef8214 from "module_8214" /* 8214 */;
import _modDef8216 from "module_8216" /* 8216 */;
import _modDef8217 from "module_8217" /* 8217 */;
import _modDef8218 from "module_8218" /* 8218 */;
import _modDef8219 from "module_8219" /* 8219 */;
import _modDef8220 from "module_8220" /* 8220 */;
import module_8190 from "module_8190" /* 8190 */;
import module_8212 from "module_8212" /* 8212 */;

let importDefaultResult1;
let importDefaultResult2;
let importDefaultResult3;
const objectAssign = module_8190.objectAssign;
const objectAssignResult = objectAssign({}, module_8212, _modDef8214);
const obj = { "0th": objectAssignResult, "1st": module_8212, exif: objectAssignResult, gps: _modDef8216, interoperability: _modDef8217, mpf: importDefaultResult1, canon: importDefaultResult2, pentax: importDefaultResult3 };
if (_modDef8193.USE_MPF) {
  importDefaultResult1 = _modDef8218;
} else {
  importDefaultResult1 = {};
}
if (_modDef8193.USE_MAKER_NOTES) {
  importDefaultResult2 = _modDef8219;
} else {
  importDefaultResult2 = {};
}
if (_modDef8193.USE_MAKER_NOTES) {
  importDefaultResult3 = _modDef8220;
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
