// Module ID: 8440
// Function ID: 8441
// Name: IFD_TYPE_0TH
// Dependencies: [8419, 8441, 8443, 8445, 8446, 8422, 8447, 8448, 8449]

// Module 8440 (IFD_TYPE_0TH)
import _modDef8422 from "module_8422" /* 8422 */;
import _modDef8443 from "module_8443" /* 8443 */;
import _modDef8445 from "module_8445" /* 8445 */;
import _modDef8446 from "module_8446" /* 8446 */;
import _modDef8447 from "module_8447" /* 8447 */;
import _modDef8448 from "module_8448" /* 8448 */;
import _modDef8449 from "module_8449" /* 8449 */;
import module_8419 from "module_8419" /* 8419 */;
import module_8441 from "module_8441" /* 8441 */;

let importDefaultResult1;
let importDefaultResult2;
let importDefaultResult3;
const objectAssign = module_8419.objectAssign;
const objectAssignResult = objectAssign({}, module_8441, _modDef8443);
const obj = { "0th": objectAssignResult, "1st": module_8441, exif: objectAssignResult, gps: _modDef8445, interoperability: _modDef8446, mpf: importDefaultResult1, canon: importDefaultResult2, pentax: importDefaultResult3 };
if (_modDef8422.USE_MPF) {
  importDefaultResult1 = _modDef8447;
} else {
  importDefaultResult1 = {};
}
if (_modDef8422.USE_MAKER_NOTES) {
  importDefaultResult2 = _modDef8448;
} else {
  importDefaultResult2 = {};
}
if (_modDef8422.USE_MAKER_NOTES) {
  importDefaultResult3 = _modDef8449;
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
