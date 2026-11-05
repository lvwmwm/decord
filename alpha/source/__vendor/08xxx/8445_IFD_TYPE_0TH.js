// Module ID: 8445
// Function ID: 8446
// Name: IFD_TYPE_0TH
// Dependencies: [8424, 8446, 8448, 8450, 8451, 8427, 8452, 8453, 8454]

// Module 8445 (IFD_TYPE_0TH)
import _modDef8427 from "module_8427" /* 8427 */;
import _modDef8448 from "module_8448" /* 8448 */;
import _modDef8450 from "module_8450" /* 8450 */;
import _modDef8451 from "module_8451" /* 8451 */;
import _modDef8452 from "module_8452" /* 8452 */;
import _modDef8453 from "module_8453" /* 8453 */;
import _modDef8454 from "module_8454" /* 8454 */;
import module_8424 from "module_8424" /* 8424 */;
import module_8446 from "module_8446" /* 8446 */;

let importDefaultResult1;
let importDefaultResult2;
let importDefaultResult3;
const objectAssign = module_8424.objectAssign;
const objectAssignResult = objectAssign({}, module_8446, _modDef8448);
const obj = { "0th": objectAssignResult, "1st": module_8446, exif: objectAssignResult, gps: _modDef8450, interoperability: _modDef8451, mpf: importDefaultResult1, canon: importDefaultResult2, pentax: importDefaultResult3 };
if (_modDef8427.USE_MPF) {
  importDefaultResult1 = _modDef8452;
} else {
  importDefaultResult1 = {};
}
if (_modDef8427.USE_MAKER_NOTES) {
  importDefaultResult2 = _modDef8453;
} else {
  importDefaultResult2 = {};
}
if (_modDef8427.USE_MAKER_NOTES) {
  importDefaultResult3 = _modDef8454;
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
