// Module ID: 8220
// Function ID: 8221
// Name: IFD_TYPE_0TH
// Dependencies: [8199, 8221, 8223, 8225, 8226, 8202, 8227, 8228, 8229]

// Module 8220 (IFD_TYPE_0TH)
import _modDef8202 from "module_8202" /* 8202 */;
import _modDef8223 from "module_8223" /* 8223 */;
import _modDef8225 from "module_8225" /* 8225 */;
import _modDef8226 from "module_8226" /* 8226 */;
import _modDef8227 from "module_8227" /* 8227 */;
import _modDef8228 from "module_8228" /* 8228 */;
import _modDef8229 from "module_8229" /* 8229 */;
import module_8199 from "module_8199" /* 8199 */;
import module_8221 from "module_8221" /* 8221 */;

let importDefaultResult1;
let importDefaultResult2;
let importDefaultResult3;
const objectAssign = module_8199.objectAssign;
const objectAssignResult = objectAssign({}, module_8221, _modDef8223);
const obj = { "0th": objectAssignResult, "1st": module_8221, exif: objectAssignResult, gps: _modDef8225, interoperability: _modDef8226, mpf: importDefaultResult1, canon: importDefaultResult2, pentax: importDefaultResult3 };
if (_modDef8202.USE_MPF) {
  importDefaultResult1 = _modDef8227;
} else {
  importDefaultResult1 = {};
}
if (_modDef8202.USE_MAKER_NOTES) {
  importDefaultResult2 = _modDef8228;
} else {
  importDefaultResult2 = {};
}
if (_modDef8202.USE_MAKER_NOTES) {
  importDefaultResult3 = _modDef8229;
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
