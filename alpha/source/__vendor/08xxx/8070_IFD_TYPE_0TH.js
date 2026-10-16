// Module ID: 8070
// Function ID: 8071
// Name: IFD_TYPE_0TH
// Dependencies: [8049, 8071, 8073, 8075, 8076, 8052, 8077, 8078, 8079]

// Module 8070 (IFD_TYPE_0TH)
import _modDef8052 from "module_8052" /* 8052 */;
import _modDef8073 from "module_8073" /* 8073 */;
import _modDef8075 from "module_8075" /* 8075 */;
import _modDef8076 from "module_8076" /* 8076 */;
import _modDef8077 from "module_8077" /* 8077 */;
import _modDef8078 from "module_8078" /* 8078 */;
import _modDef8079 from "module_8079" /* 8079 */;
import module_8049 from "module_8049" /* 8049 */;
import module_8071 from "module_8071" /* 8071 */;

let importDefaultResult1;
let importDefaultResult2;
let importDefaultResult3;
const objectAssign = module_8049.objectAssign;
const objectAssignResult = objectAssign({}, module_8071, _modDef8073);
const obj = { "0th": objectAssignResult, "1st": module_8071, exif: objectAssignResult, gps: _modDef8075, interoperability: _modDef8076, mpf: importDefaultResult1, canon: importDefaultResult2, pentax: importDefaultResult3 };
if (_modDef8052.USE_MPF) {
  importDefaultResult1 = _modDef8077;
} else {
  importDefaultResult1 = {};
}
if (_modDef8052.USE_MAKER_NOTES) {
  importDefaultResult2 = _modDef8078;
} else {
  importDefaultResult2 = {};
}
if (_modDef8052.USE_MAKER_NOTES) {
  importDefaultResult3 = _modDef8079;
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
