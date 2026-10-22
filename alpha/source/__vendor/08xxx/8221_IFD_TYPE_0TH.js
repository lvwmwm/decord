// Module ID: 8221
// Function ID: 8222
// Name: IFD_TYPE_0TH
// Dependencies: [8200, 8222, 8224, 8226, 8227, 8203, 8228, 8229, 8230]

// Module 8221 (IFD_TYPE_0TH)
import _modDef8203 from "module_8203" /* 8203 */;
import _modDef8224 from "module_8224" /* 8224 */;
import _modDef8226 from "module_8226" /* 8226 */;
import _modDef8227 from "module_8227" /* 8227 */;
import _modDef8228 from "module_8228" /* 8228 */;
import _modDef8229 from "module_8229" /* 8229 */;
import _modDef8230 from "module_8230" /* 8230 */;
import module_8200 from "module_8200" /* 8200 */;
import module_8222 from "module_8222" /* 8222 */;

let importDefaultResult1;
let importDefaultResult2;
let importDefaultResult3;
const objectAssign = module_8200.objectAssign;
const objectAssignResult = objectAssign({}, module_8222, _modDef8224);
const obj = { "0th": objectAssignResult, "1st": module_8222, exif: objectAssignResult, gps: _modDef8226, interoperability: _modDef8227, mpf: importDefaultResult1, canon: importDefaultResult2, pentax: importDefaultResult3 };
if (_modDef8203.USE_MPF) {
  importDefaultResult1 = _modDef8228;
} else {
  importDefaultResult1 = {};
}
if (_modDef8203.USE_MAKER_NOTES) {
  importDefaultResult2 = _modDef8229;
} else {
  importDefaultResult2 = {};
}
if (_modDef8203.USE_MAKER_NOTES) {
  importDefaultResult3 = _modDef8230;
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
