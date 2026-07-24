// Module ID: 4766
// Function ID: 41373
// Name: IFD_TYPE_0TH
// Dependencies: [77, 4745, 4767, 4769, 4771, 4772, 4748, 4773, 4774, 4775]

// Module 4766 (IFD_TYPE_0TH)
import importDefaultResult from "_defineProperty";
import getStringFromDataView from "getStringFromDataView";
import objectAssignResult from "decodeXPValue";
import importDefaultResult1 from "decodeXPValue";
import importDefaultResultResult2 from "module_4771";
import importDefaultResultResult3 from "getStringValue";

const importDefaultResultResult = importDefaultResult({}, "0th", objectAssignResult);
const importDefaultResultResult1 = importDefaultResult(importDefaultResult(importDefaultResult({}, "0th", objectAssignResult), "1st", require("decodeXPValue")), "exif", objectAssignResult);
if (require("module_4748").USE_MPF) {
  let importDefaultResult2 = require("getStringValue");
} else {
  importDefaultResult2 = {};
}
if (require("module_4748").USE_MAKER_NOTES) {
  let importDefaultResult3 = require("module_4774");
} else {
  importDefaultResult3 = {};
}
const importDefaultResultResult4 = importDefaultResult(importDefaultResult(importDefaultResult(importDefaultResult(importDefaultResult(importDefaultResult({}, "0th", objectAssignResult), "1st", require("decodeXPValue")), "exif", objectAssignResult), "gps", require("module_4771")), "interoperability", require("getStringValue")), "mpf", importDefaultResult2);
if (require("module_4748").USE_MAKER_NOTES) {
  let importDefaultResult4 = require("module_4775");
} else {
  importDefaultResult4 = {};
}

export default importDefaultResult(importDefaultResult(importDefaultResult(importDefaultResult(importDefaultResult(importDefaultResult(importDefaultResult(importDefaultResult({}, "0th", objectAssignResult), "1st", require("decodeXPValue")), "exif", objectAssignResult), "gps", require("module_4771")), "interoperability", require("getStringValue")), "mpf", importDefaultResult2), "canon", importDefaultResult3), "pentax", importDefaultResult4);
export const IFD_TYPE_0TH = "0th";
export const IFD_TYPE_1ST = "1st";
export const IFD_TYPE_EXIF = "exif";
export const IFD_TYPE_GPS = "gps";
export const IFD_TYPE_INTEROPERABILITY = "interoperability";
export const IFD_TYPE_MPF = "mpf";
export const IFD_TYPE_CANON = "canon";
export const IFD_TYPE_PENTAX = "pentax";
