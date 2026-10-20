// Module ID: 8179
// Function ID: 8180
// Name: IFD_TYPE_0TH
// Dependencies: [8158, 8180, 8182, 8184, 8185, 8161, 8186, 8187, 8188]

// Module 8179 (IFD_TYPE_0TH)
import _modDef8161 from "module_8161" /* 8161 */;
import _modDef8182 from "module_8182" /* 8182 */;
import _modDef8184 from "module_8184" /* 8184 */;
import _modDef8185 from "module_8185" /* 8185 */;
import _modDef8186 from "module_8186" /* 8186 */;
import _modDef8187 from "module_8187" /* 8187 */;
import _modDef8188 from "module_8188" /* 8188 */;
import module_8158 from "module_8158" /* 8158 */;
import module_8180 from "module_8180" /* 8180 */;

let importDefaultResult1;
let importDefaultResult2;
let importDefaultResult3;
const objectAssign = module_8158.objectAssign;
const objectAssignResult = objectAssign({}, module_8180, _modDef8182);
const obj = { "0th": objectAssignResult, "1st": module_8180, exif: objectAssignResult, gps: _modDef8184, interoperability: _modDef8185, mpf: importDefaultResult1, canon: importDefaultResult2, pentax: importDefaultResult3 };
if (_modDef8161.USE_MPF) {
  importDefaultResult1 = _modDef8186;
} else {
  importDefaultResult1 = {};
}
if (_modDef8161.USE_MAKER_NOTES) {
  importDefaultResult2 = _modDef8187;
} else {
  importDefaultResult2 = {};
}
if (_modDef8161.USE_MAKER_NOTES) {
  importDefaultResult3 = _modDef8188;
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
