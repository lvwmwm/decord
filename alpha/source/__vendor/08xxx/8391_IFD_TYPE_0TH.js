// Module ID: 8391
// Function ID: 8392
// Name: IFD_TYPE_0TH
// Dependencies: [8370, 8392, 8394, 8396, 8397, 8373, 8398, 8399, 8400]

// Module 8391 (IFD_TYPE_0TH)
import _modDef8373 from "module_8373" /* 8373 */;
import _modDef8394 from "module_8394" /* 8394 */;
import _modDef8396 from "module_8396" /* 8396 */;
import _modDef8397 from "module_8397" /* 8397 */;
import _modDef8398 from "module_8398" /* 8398 */;
import _modDef8399 from "module_8399" /* 8399 */;
import _modDef8400 from "module_8400" /* 8400 */;
import module_8370 from "module_8370" /* 8370 */;
import module_8392 from "module_8392" /* 8392 */;

let importDefaultResult1;
let importDefaultResult2;
let importDefaultResult3;
const objectAssign = module_8370.objectAssign;
const objectAssignResult = objectAssign({}, module_8392, _modDef8394);
const obj = { "0th": objectAssignResult, "1st": module_8392, exif: objectAssignResult, gps: _modDef8396, interoperability: _modDef8397, mpf: importDefaultResult1, canon: importDefaultResult2, pentax: importDefaultResult3 };
if (_modDef8373.USE_MPF) {
  importDefaultResult1 = _modDef8398;
} else {
  importDefaultResult1 = {};
}
if (_modDef8373.USE_MAKER_NOTES) {
  importDefaultResult2 = _modDef8399;
} else {
  importDefaultResult2 = {};
}
if (_modDef8373.USE_MAKER_NOTES) {
  importDefaultResult3 = _modDef8400;
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
