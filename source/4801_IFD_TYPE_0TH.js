// Module ID: 4801
// Function ID: 41501
// Name: IFD_TYPE_0TH
// Dependencies: [77, 4780, 4802, 4804, 4806, 4807, 4783, 4808, 4809, 4810]

// Module 4801 (IFD_TYPE_0TH)
import importDefaultResult from "_defineProperty";
import getStringFromDataView from "getStringFromDataView";
import objectAssignResult from "decodeXPValue";
import importDefaultResult1 from "decodeXPValue";
import importDefaultResultResult2 from "module_4806";
import importDefaultResultResult3 from "getStringValue";

const importDefaultResultResult = importDefaultResult({}, "0th", objectAssignResult);
const importDefaultResultResult1 = importDefaultResult(importDefaultResult(importDefaultResult({}, "0th", objectAssignResult), "1st", require("decodeXPValue")), "exif", objectAssignResult);
if (require("module_4783").USE_MPF) {
  let importDefaultResult2 = require("getStringValue");
} else {
  importDefaultResult2 = {};
}
if (require("module_4783").USE_MAKER_NOTES) {
  let importDefaultResult3 = require("module_4809");
} else {
  importDefaultResult3 = {};
}
const importDefaultResultResult4 = importDefaultResult(importDefaultResult(importDefaultResult(importDefaultResult(importDefaultResult(importDefaultResult({}, "0th", objectAssignResult), "1st", require("decodeXPValue")), "exif", objectAssignResult), "gps", require("module_4806")), "interoperability", require("getStringValue")), "mpf", importDefaultResult2);
if (require("module_4783").USE_MAKER_NOTES) {
  let importDefaultResult4 = require("module_4810");
} else {
  importDefaultResult4 = {};
}

export default importDefaultResult(importDefaultResult(importDefaultResult(importDefaultResult(importDefaultResult(importDefaultResult(importDefaultResult(importDefaultResult({}, "0th", objectAssignResult), "1st", require("decodeXPValue")), "exif", objectAssignResult), "gps", require("module_4806")), "interoperability", require("getStringValue")), "mpf", importDefaultResult2), "canon", importDefaultResult3), "pentax", importDefaultResult4);
export const IFD_TYPE_0TH = "0th";
export const IFD_TYPE_1ST = "1st";
export const IFD_TYPE_EXIF = "exif";
export const IFD_TYPE_GPS = "gps";
export const IFD_TYPE_INTEROPERABILITY = "interoperability";
export const IFD_TYPE_MPF = "mpf";
export const IFD_TYPE_CANON = "canon";
export const IFD_TYPE_PENTAX = "pentax";
