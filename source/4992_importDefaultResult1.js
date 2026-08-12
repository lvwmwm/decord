// Module ID: 4992
// Function ID: 4993
// Name: importDefaultResult1
// Dependencies: [4971, 4993, 4995, 4997, 4998, 4974, 4999, 5000, 5001]

// Module 4992 (importDefaultResult1)
import getDataView from "getDataView";
import objectAssignResult from "decodeXPValue";

const obj = { "0th": objectAssignResult, "1st": require("decodeXPValue"), exif: objectAssignResult, gps: require("module_4997"), interoperability: require("getStringValue"), mpf: null, canon: null, pentax: null };
if (require("module_4974").USE_MPF) {
  let importDefaultResult1 = require("getStringValue");
} else {
  importDefaultResult1 = {};
}
obj[5] = importDefaultResult1;
if (require("module_4974").USE_MAKER_NOTES) {
  let importDefaultResult2 = require("module_5000");
} else {
  importDefaultResult2 = {};
}
obj[6] = importDefaultResult2;
if (require("module_4974").USE_MAKER_NOTES) {
  let importDefaultResult3 = require("module_5001");
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
