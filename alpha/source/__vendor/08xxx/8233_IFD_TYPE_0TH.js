// Module ID: 8233
// Function ID: 8234
// Name: IFD_TYPE_0TH
// Dependencies: [8212, 8234, 8236, 8238, 8239, 8215, 8240, 8241, 8242]

// Module 8233 (IFD_TYPE_0TH)
import _modDef8215 from "module_8215" /* 8215 */;
import _modDef8236 from "module_8236" /* 8236 */;
import _modDef8238 from "module_8238" /* 8238 */;
import _modDef8239 from "module_8239" /* 8239 */;
import _modDef8240 from "module_8240" /* 8240 */;
import _modDef8241 from "module_8241" /* 8241 */;
import _modDef8242 from "module_8242" /* 8242 */;
import module_8212 from "module_8212" /* 8212 */;
import module_8234 from "module_8234" /* 8234 */;

let importDefaultResult1;
let importDefaultResult2;
let importDefaultResult3;
const objectAssign = module_8212.objectAssign;
const objectAssignResult = objectAssign({}, module_8234, _modDef8236);
const obj = { "0th": objectAssignResult, "1st": module_8234, exif: objectAssignResult, gps: _modDef8238, interoperability: _modDef8239, mpf: importDefaultResult1, canon: importDefaultResult2, pentax: importDefaultResult3 };
if (_modDef8215.USE_MPF) {
  importDefaultResult1 = _modDef8240;
} else {
  importDefaultResult1 = {};
}
if (_modDef8215.USE_MAKER_NOTES) {
  importDefaultResult2 = _modDef8241;
} else {
  importDefaultResult2 = {};
}
if (_modDef8215.USE_MAKER_NOTES) {
  importDefaultResult3 = _modDef8242;
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
