// Module ID: 5195
// Function ID: 5196
// Name: importDefaultResult1
// Dependencies: [5174, 5196, 5198, 5200, 5201, 5177, 5202, 5203, 5204]

// Module 5195 (importDefaultResult1)
import _modDef5177 from "module_5177" /* 5177 */;
import decodeXPValueDefault from "decodeXPValue" /* 5196 */;
import _modDef5198 from "module_5198" /* 5198 */;
import _modDef5200 from "module_5200" /* 5200 */;
import getStringValueDefault from "getStringValue" /* 5201 */;
import getStringValueDefault2 from "getStringValue" /* 5202 */;
import _modDef5203 from "module_5203" /* 5203 */;
import _modDef5204 from "module_5204" /* 5204 */;
import getDataView from "getDataView" /* 5174 */;

const objectAssignResult = getDataView.objectAssign({}, decodeXPValueDefault, _modDef5198);
const obj = { "0th": objectAssignResult, "1st": decodeXPValueDefault, exif: objectAssignResult, gps: _modDef5200, interoperability: getStringValueDefault, mpf: null, canon: null, pentax: null };
if (_modDef5177.USE_MPF) {
  let importDefaultResult1 = getStringValueDefault2;
} else {
  importDefaultResult1 = {};
}
obj[5] = importDefaultResult1;
if (_modDef5177.USE_MAKER_NOTES) {
  let importDefaultResult2 = _modDef5203;
} else {
  importDefaultResult2 = {};
}
obj[6] = importDefaultResult2;
if (_modDef5177.USE_MAKER_NOTES) {
  let importDefaultResult3 = _modDef5204;
} else {
  importDefaultResult3 = {};
}
obj[7] = importDefaultResult3;

export default obj;
export const IFD_TYPE_0TH = "0th";
export const IFD_TYPE_1ST = "1st";
export const IFD_TYPE_EXIF = "exif";
export const IFD_TYPE_GPS = "gps";
export const IFD_TYPE_INTEROPERABILITY = "interoperability";
export const IFD_TYPE_MPF = "mpf";
export const IFD_TYPE_CANON = "canon";
export const IFD_TYPE_PENTAX = "pentax";
