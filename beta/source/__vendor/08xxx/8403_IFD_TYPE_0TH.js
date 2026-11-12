// Module ID: 8403
// Function ID: 8404
// Name: IFD_TYPE_0TH
// Dependencies: [8382, 8404, 8406, 8408, 8409, 8385, 8410, 8411, 8412]

// Module 8403 (IFD_TYPE_0TH)
import _modDef8385 from "module_8385" /* 8385 */;
import _modDef8406 from "module_8406" /* 8406 */;
import _modDef8408 from "module_8408" /* 8408 */;
import _modDef8409 from "module_8409" /* 8409 */;
import _modDef8410 from "module_8410" /* 8410 */;
import _modDef8411 from "module_8411" /* 8411 */;
import _modDef8412 from "module_8412" /* 8412 */;
import module_8382 from "module_8382" /* 8382 */;
import module_8404 from "module_8404" /* 8404 */;

let importDefaultResult1;
let importDefaultResult2;
let importDefaultResult3;
const objectAssign = module_8382.objectAssign;
const objectAssignResult = objectAssign({}, module_8404, _modDef8406);
const obj = { "0th": objectAssignResult, "1st": module_8404, exif: objectAssignResult, gps: _modDef8408, interoperability: _modDef8409, mpf: importDefaultResult1, canon: importDefaultResult2, pentax: importDefaultResult3 };
if (_modDef8385.USE_MPF) {
  importDefaultResult1 = _modDef8410;
} else {
  importDefaultResult1 = {};
}
if (_modDef8385.USE_MAKER_NOTES) {
  importDefaultResult2 = _modDef8411;
} else {
  importDefaultResult2 = {};
}
if (_modDef8385.USE_MAKER_NOTES) {
  importDefaultResult3 = _modDef8412;
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
