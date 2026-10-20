// Module ID: 8183
// Function ID: 8184
// Name: IFD_TYPE_0TH
// Dependencies: [8162, 8184, 8186, 8188, 8189, 8165, 8190, 8191, 8192]

// Module 8183 (IFD_TYPE_0TH)
import _modDef8165 from "module_8165" /* 8165 */;
import _modDef8186 from "module_8186" /* 8186 */;
import _modDef8188 from "module_8188" /* 8188 */;
import _modDef8189 from "module_8189" /* 8189 */;
import _modDef8190 from "module_8190" /* 8190 */;
import _modDef8191 from "module_8191" /* 8191 */;
import _modDef8192 from "module_8192" /* 8192 */;
import module_8162 from "module_8162" /* 8162 */;
import module_8184 from "module_8184" /* 8184 */;

let importDefaultResult1;
let importDefaultResult2;
let importDefaultResult3;
const objectAssign = module_8162.objectAssign;
const objectAssignResult = objectAssign({}, module_8184, _modDef8186);
const obj = { "0th": objectAssignResult, "1st": module_8184, exif: objectAssignResult, gps: _modDef8188, interoperability: _modDef8189, mpf: importDefaultResult1, canon: importDefaultResult2, pentax: importDefaultResult3 };
if (_modDef8165.USE_MPF) {
  importDefaultResult1 = _modDef8190;
} else {
  importDefaultResult1 = {};
}
if (_modDef8165.USE_MAKER_NOTES) {
  importDefaultResult2 = _modDef8191;
} else {
  importDefaultResult2 = {};
}
if (_modDef8165.USE_MAKER_NOTES) {
  importDefaultResult3 = _modDef8192;
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
