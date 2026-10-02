// Module ID: 5548
// Function ID: 5549
// Name: IFD_TYPE_0TH
// Dependencies: [5527, 5549, 5551, 5553, 5554, 5530, 5555, 5556, 5557]

// Module 5548 (IFD_TYPE_0TH)
import _modDef5530 from "module_5530" /* 5530 */;
import _modDef5551 from "module_5551" /* 5551 */;
import _modDef5553 from "module_5553" /* 5553 */;
import _modDef5554 from "module_5554" /* 5554 */;
import _modDef5555 from "module_5555" /* 5555 */;
import _modDef5556 from "module_5556" /* 5556 */;
import _modDef5557 from "module_5557" /* 5557 */;
import module_5527 from "module_5527" /* 5527 */;
import module_5549 from "module_5549" /* 5549 */;

let importDefaultResult1;
let importDefaultResult2;
let importDefaultResult3;
const objectAssign = module_5527.objectAssign;
const objectAssignResult = objectAssign({}, module_5549, _modDef5551);
const obj = { "0th": objectAssignResult, "1st": module_5549, exif: objectAssignResult, gps: _modDef5553, interoperability: _modDef5554, mpf: importDefaultResult1, canon: importDefaultResult2, pentax: importDefaultResult3 };
if (_modDef5530.USE_MPF) {
  importDefaultResult1 = _modDef5555;
} else {
  importDefaultResult1 = {};
}
if (_modDef5530.USE_MAKER_NOTES) {
  importDefaultResult2 = _modDef5556;
} else {
  importDefaultResult2 = {};
}
if (_modDef5530.USE_MAKER_NOTES) {
  importDefaultResult3 = _modDef5557;
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
