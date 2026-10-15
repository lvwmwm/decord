// Module ID: 8066
// Function ID: 8067
// Name: IFD_TYPE_0TH
// Dependencies: [8045, 8067, 8069, 8071, 8072, 8048, 8073, 8074, 8075]

// Module 8066 (IFD_TYPE_0TH)
import _modDef8048 from "module_8048" /* 8048 */;
import _modDef8069 from "module_8069" /* 8069 */;
import _modDef8071 from "module_8071" /* 8071 */;
import _modDef8072 from "module_8072" /* 8072 */;
import _modDef8073 from "module_8073" /* 8073 */;
import _modDef8074 from "module_8074" /* 8074 */;
import _modDef8075 from "module_8075" /* 8075 */;
import module_8045 from "module_8045" /* 8045 */;
import module_8067 from "module_8067" /* 8067 */;

let importDefaultResult1;
let importDefaultResult2;
let importDefaultResult3;
const objectAssign = module_8045.objectAssign;
const objectAssignResult = objectAssign({}, module_8067, _modDef8069);
const obj = { "0th": objectAssignResult, "1st": module_8067, exif: objectAssignResult, gps: _modDef8071, interoperability: _modDef8072, mpf: importDefaultResult1, canon: importDefaultResult2, pentax: importDefaultResult3 };
if (_modDef8048.USE_MPF) {
  importDefaultResult1 = _modDef8073;
} else {
  importDefaultResult1 = {};
}
if (_modDef8048.USE_MAKER_NOTES) {
  importDefaultResult2 = _modDef8074;
} else {
  importDefaultResult2 = {};
}
if (_modDef8048.USE_MAKER_NOTES) {
  importDefaultResult3 = _modDef8075;
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
