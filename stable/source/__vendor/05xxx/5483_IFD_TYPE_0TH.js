// Module ID: 5483
// Function ID: 5484
// Name: IFD_TYPE_0TH
// Dependencies: [5462, 5484, 5486, 5488, 5489, 5465, 5490, 5491, 5492]

// Module 5483 (IFD_TYPE_0TH)
import _modDef5465 from "module_5465" /* 5465 */;
import _modDef5486 from "module_5486" /* 5486 */;
import _modDef5488 from "module_5488" /* 5488 */;
import _modDef5489 from "module_5489" /* 5489 */;
import _modDef5490 from "module_5490" /* 5490 */;
import _modDef5491 from "module_5491" /* 5491 */;
import _modDef5492 from "module_5492" /* 5492 */;
import module_5462 from "module_5462" /* 5462 */;
import decodeXPValue from "decodeXPValue" /* 5484 */;

const objectAssignResult = module_5462.objectAssign({}, decodeXPValue, _modDef5486);
const obj = { "0th": objectAssignResult, "1st": decodeXPValue, exif: objectAssignResult, gps: _modDef5488, interoperability: _modDef5489, mpf: null, canon: null, pentax: null };
if (_modDef5465.USE_MPF) {
  let importDefaultResult1 = _modDef5490;
} else {
  importDefaultResult1 = {};
}
obj.mpf = importDefaultResult1;
if (_modDef5465.USE_MAKER_NOTES) {
  let importDefaultResult2 = _modDef5491;
} else {
  importDefaultResult2 = {};
}
obj.canon = importDefaultResult2;
if (_modDef5465.USE_MAKER_NOTES) {
  let importDefaultResult3 = _modDef5492;
} else {
  importDefaultResult3 = {};
}
obj.pentax = importDefaultResult3;

export default obj;
export const IFD_TYPE_0TH = "0th";
export const IFD_TYPE_1ST = "1st";
export const IFD_TYPE_EXIF = "exif";
export const IFD_TYPE_GPS = "gps";
export const IFD_TYPE_INTEROPERABILITY = "interoperability";
export const IFD_TYPE_MPF = "mpf";
export const IFD_TYPE_CANON = "canon";
export const IFD_TYPE_PENTAX = "pentax";
