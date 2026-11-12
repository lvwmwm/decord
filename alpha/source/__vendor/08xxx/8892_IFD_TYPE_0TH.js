// Module ID: 8892
// Function ID: 8893
// Name: IFD_TYPE_0TH
// Dependencies: [8871, 8893, 8895, 8897, 8898, 8874, 8899, 8900, 8901]

// Module 8892 (IFD_TYPE_0TH)
import _modDef8874 from "module_8874" /* 8874 */;
import _modDef8895 from "module_8895" /* 8895 */;
import _modDef8897 from "module_8897" /* 8897 */;
import _modDef8898 from "module_8898" /* 8898 */;
import _modDef8899 from "module_8899" /* 8899 */;
import _modDef8900 from "module_8900" /* 8900 */;
import _modDef8901 from "module_8901" /* 8901 */;
import module_8871 from "module_8871" /* 8871 */;
import module_8893 from "module_8893" /* 8893 */;

let importDefaultResult1;
let importDefaultResult2;
let importDefaultResult3;
const objectAssign = module_8871.objectAssign;
const objectAssignResult = objectAssign({}, module_8893, _modDef8895);
const obj = { "0th": objectAssignResult, "1st": module_8893, exif: objectAssignResult, gps: _modDef8897, interoperability: _modDef8898, mpf: importDefaultResult1, canon: importDefaultResult2, pentax: importDefaultResult3 };
if (_modDef8874.USE_MPF) {
  importDefaultResult1 = _modDef8899;
} else {
  importDefaultResult1 = {};
}
if (_modDef8874.USE_MAKER_NOTES) {
  importDefaultResult2 = _modDef8900;
} else {
  importDefaultResult2 = {};
}
if (_modDef8874.USE_MAKER_NOTES) {
  importDefaultResult3 = _modDef8901;
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
