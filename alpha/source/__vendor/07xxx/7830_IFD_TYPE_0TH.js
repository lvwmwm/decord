// Module ID: 7830
// Function ID: 7831
// Name: IFD_TYPE_0TH
// Dependencies: [7809, 7831, 7833, 7835, 7836, 7812, 7837, 7838, 7839]

// Module 7830 (IFD_TYPE_0TH)
import _modDef7812 from "module_7812" /* 7812 */;
import _modDef7833 from "module_7833" /* 7833 */;
import _modDef7835 from "module_7835" /* 7835 */;
import _modDef7836 from "module_7836" /* 7836 */;
import _modDef7837 from "module_7837" /* 7837 */;
import _modDef7838 from "module_7838" /* 7838 */;
import _modDef7839 from "module_7839" /* 7839 */;
import module_7809 from "module_7809" /* 7809 */;
import module_7831 from "module_7831" /* 7831 */;

let importDefaultResult1;
let importDefaultResult2;
let importDefaultResult3;
const objectAssign = module_7809.objectAssign;
const objectAssignResult = objectAssign({}, module_7831, _modDef7833);
const obj = { "0th": objectAssignResult, "1st": module_7831, exif: objectAssignResult, gps: _modDef7835, interoperability: _modDef7836, mpf: importDefaultResult1, canon: importDefaultResult2, pentax: importDefaultResult3 };
if (_modDef7812.USE_MPF) {
  importDefaultResult1 = _modDef7837;
} else {
  importDefaultResult1 = {};
}
if (_modDef7812.USE_MAKER_NOTES) {
  importDefaultResult2 = _modDef7838;
} else {
  importDefaultResult2 = {};
}
if (_modDef7812.USE_MAKER_NOTES) {
  importDefaultResult3 = _modDef7839;
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
