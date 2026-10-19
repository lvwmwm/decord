// Module ID: 8116
// Function ID: 8117
// Name: IFD_TYPE_0TH
// Dependencies: [8095, 8117, 8119, 8121, 8122, 8098, 8123, 8124, 8125]

// Module 8116 (IFD_TYPE_0TH)
import _modDef8098 from "module_8098" /* 8098 */;
import _modDef8119 from "module_8119" /* 8119 */;
import _modDef8121 from "module_8121" /* 8121 */;
import _modDef8122 from "module_8122" /* 8122 */;
import _modDef8123 from "module_8123" /* 8123 */;
import _modDef8124 from "module_8124" /* 8124 */;
import _modDef8125 from "module_8125" /* 8125 */;
import module_8095 from "module_8095" /* 8095 */;
import module_8117 from "module_8117" /* 8117 */;

let importDefaultResult1;
let importDefaultResult2;
let importDefaultResult3;
const objectAssign = module_8095.objectAssign;
const objectAssignResult = objectAssign({}, module_8117, _modDef8119);
const obj = { "0th": objectAssignResult, "1st": module_8117, exif: objectAssignResult, gps: _modDef8121, interoperability: _modDef8122, mpf: importDefaultResult1, canon: importDefaultResult2, pentax: importDefaultResult3 };
if (_modDef8098.USE_MPF) {
  importDefaultResult1 = _modDef8123;
} else {
  importDefaultResult1 = {};
}
if (_modDef8098.USE_MAKER_NOTES) {
  importDefaultResult2 = _modDef8124;
} else {
  importDefaultResult2 = {};
}
if (_modDef8098.USE_MAKER_NOTES) {
  importDefaultResult3 = _modDef8125;
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
