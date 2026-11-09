// Module ID: 8370
// Function ID: 8371
// Name: IFD_TYPE_0TH
// Dependencies: [8349, 8371, 8373, 8375, 8376, 8352, 8377, 8378, 8379]

// Module 8370 (IFD_TYPE_0TH)
import _modDef8352 from "module_8352" /* 8352 */;
import _modDef8373 from "module_8373" /* 8373 */;
import _modDef8375 from "module_8375" /* 8375 */;
import _modDef8376 from "module_8376" /* 8376 */;
import _modDef8377 from "module_8377" /* 8377 */;
import _modDef8378 from "module_8378" /* 8378 */;
import _modDef8379 from "module_8379" /* 8379 */;
import module_8349 from "module_8349" /* 8349 */;
import module_8371 from "module_8371" /* 8371 */;

let importDefaultResult1;
let importDefaultResult2;
let importDefaultResult3;
const objectAssign = module_8349.objectAssign;
const objectAssignResult = objectAssign({}, module_8371, _modDef8373);
const obj = { "0th": objectAssignResult, "1st": module_8371, exif: objectAssignResult, gps: _modDef8375, interoperability: _modDef8376, mpf: importDefaultResult1, canon: importDefaultResult2, pentax: importDefaultResult3 };
if (_modDef8352.USE_MPF) {
  importDefaultResult1 = _modDef8377;
} else {
  importDefaultResult1 = {};
}
if (_modDef8352.USE_MAKER_NOTES) {
  importDefaultResult2 = _modDef8378;
} else {
  importDefaultResult2 = {};
}
if (_modDef8352.USE_MAKER_NOTES) {
  importDefaultResult3 = _modDef8379;
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
