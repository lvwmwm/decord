// Module ID: 8069
// Function ID: 8070
// Name: IFD_TYPE_0TH
// Dependencies: [8048, 8070, 8072, 8074, 8075, 8051, 8076, 8077, 8078]

// Module 8069 (IFD_TYPE_0TH)
import _modDef8051 from "module_8051" /* 8051 */;
import _modDef8072 from "module_8072" /* 8072 */;
import _modDef8074 from "module_8074" /* 8074 */;
import _modDef8075 from "module_8075" /* 8075 */;
import _modDef8076 from "module_8076" /* 8076 */;
import _modDef8077 from "module_8077" /* 8077 */;
import _modDef8078 from "module_8078" /* 8078 */;
import module_8048 from "module_8048" /* 8048 */;
import module_8070 from "module_8070" /* 8070 */;

let importDefaultResult1;
let importDefaultResult2;
let importDefaultResult3;
const objectAssign = module_8048.objectAssign;
const objectAssignResult = objectAssign({}, module_8070, _modDef8072);
const obj = { "0th": objectAssignResult, "1st": module_8070, exif: objectAssignResult, gps: _modDef8074, interoperability: _modDef8075, mpf: importDefaultResult1, canon: importDefaultResult2, pentax: importDefaultResult3 };
if (_modDef8051.USE_MPF) {
  importDefaultResult1 = _modDef8076;
} else {
  importDefaultResult1 = {};
}
if (_modDef8051.USE_MAKER_NOTES) {
  importDefaultResult2 = _modDef8077;
} else {
  importDefaultResult2 = {};
}
if (_modDef8051.USE_MAKER_NOTES) {
  importDefaultResult3 = _modDef8078;
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
