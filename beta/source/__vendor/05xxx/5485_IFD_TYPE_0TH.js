// Module ID: 5485
// Function ID: 5486
// Name: IFD_TYPE_0TH
// Dependencies: [5464, 5486, 5488, 5490, 5491, 5467, 5492, 5493, 5494]

// Module 5485 (IFD_TYPE_0TH)
import _modDef5467 from "module_5467" /* 5467 */;
import _modDef5488 from "module_5488" /* 5488 */;
import _modDef5490 from "module_5490" /* 5490 */;
import _modDef5491 from "module_5491" /* 5491 */;
import _modDef5492 from "module_5492" /* 5492 */;
import _modDef5493 from "module_5493" /* 5493 */;
import _modDef5494 from "module_5494" /* 5494 */;
import module_5464 from "module_5464" /* 5464 */;
import decodeXPValue from "decodeXPValue" /* 5486 */;

const objectAssignResult = module_5464.objectAssign({}, decodeXPValue, _modDef5488);
const obj = { "0th": objectAssignResult, "1st": decodeXPValue, exif: objectAssignResult, gps: _modDef5490, interoperability: _modDef5491, mpf: null, canon: null, pentax: null };
if (_modDef5467.USE_MPF) {
  let importDefaultResult1 = _modDef5492;
} else {
  importDefaultResult1 = {};
}
obj.mpf = importDefaultResult1;
if (_modDef5467.USE_MAKER_NOTES) {
  let importDefaultResult2 = _modDef5493;
} else {
  importDefaultResult2 = {};
}
obj.canon = importDefaultResult2;
if (_modDef5467.USE_MAKER_NOTES) {
  let importDefaultResult3 = _modDef5494;
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
