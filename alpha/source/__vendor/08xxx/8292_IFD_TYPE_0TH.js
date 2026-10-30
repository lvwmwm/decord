// Module ID: 8292
// Function ID: 8293
// Name: IFD_TYPE_0TH
// Dependencies: [8271, 8293, 8295, 8297, 8298, 8274, 8299, 8300, 8301]

// Module 8292 (IFD_TYPE_0TH)
import _modDef8274 from "module_8274" /* 8274 */;
import _modDef8295 from "module_8295" /* 8295 */;
import _modDef8297 from "module_8297" /* 8297 */;
import _modDef8298 from "module_8298" /* 8298 */;
import _modDef8299 from "module_8299" /* 8299 */;
import _modDef8300 from "module_8300" /* 8300 */;
import _modDef8301 from "module_8301" /* 8301 */;
import module_8271 from "module_8271" /* 8271 */;
import module_8293 from "module_8293" /* 8293 */;

let importDefaultResult1;
let importDefaultResult2;
let importDefaultResult3;
const objectAssign = module_8271.objectAssign;
const objectAssignResult = objectAssign({}, module_8293, _modDef8295);
const obj = { "0th": objectAssignResult, "1st": module_8293, exif: objectAssignResult, gps: _modDef8297, interoperability: _modDef8298, mpf: importDefaultResult1, canon: importDefaultResult2, pentax: importDefaultResult3 };
if (_modDef8274.USE_MPF) {
  importDefaultResult1 = _modDef8299;
} else {
  importDefaultResult1 = {};
}
if (_modDef8274.USE_MAKER_NOTES) {
  importDefaultResult2 = _modDef8300;
} else {
  importDefaultResult2 = {};
}
if (_modDef8274.USE_MAKER_NOTES) {
  importDefaultResult3 = _modDef8301;
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
