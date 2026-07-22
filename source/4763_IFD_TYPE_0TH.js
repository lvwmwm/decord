// Module ID: 4763
// Function ID: 41351
// Name: IFD_TYPE_0TH
// Dependencies: []

// Module 4763 (IFD_TYPE_0TH)
const importDefaultResult = importDefault(dependencyMap[0]);
const obj = arg1(dependencyMap[1]);
const objectAssignResult = obj.objectAssign({}, importDefault(dependencyMap[2]), importDefault(dependencyMap[3]));
const importDefaultResult1 = importDefault(dependencyMap[2]);
const importDefaultResultResult = importDefaultResult({}, "0th", objectAssignResult);
const importDefaultResultResult1 = importDefaultResult(importDefaultResult(importDefaultResult({}, "0th", objectAssignResult), "1st", importDefault(dependencyMap[2])), "exif", objectAssignResult);
const importDefaultResultResult2 = importDefaultResult(importDefaultResult(importDefaultResult(importDefaultResult({}, "0th", objectAssignResult), "1st", importDefault(dependencyMap[2])), "exif", objectAssignResult), "gps", importDefault(dependencyMap[4]));
if (importDefault(dependencyMap[6]).USE_MPF) {
  let importDefaultResult2 = importDefault(dependencyMap[7]);
} else {
  importDefaultResult2 = {};
}
const importDefaultResultResult3 = importDefaultResult(importDefaultResult(importDefaultResult(importDefaultResult(importDefaultResult({}, "0th", objectAssignResult), "1st", importDefault(dependencyMap[2])), "exif", objectAssignResult), "gps", importDefault(dependencyMap[4])), "interoperability", importDefault(dependencyMap[5]));
if (importDefault(dependencyMap[6]).USE_MAKER_NOTES) {
  let importDefaultResult3 = importDefault(dependencyMap[8]);
} else {
  importDefaultResult3 = {};
}
const importDefaultResultResult4 = importDefaultResult(importDefaultResult(importDefaultResult(importDefaultResult(importDefaultResult(importDefaultResult({}, "0th", objectAssignResult), "1st", importDefault(dependencyMap[2])), "exif", objectAssignResult), "gps", importDefault(dependencyMap[4])), "interoperability", importDefault(dependencyMap[5])), "mpf", importDefaultResult2);
if (importDefault(dependencyMap[6]).USE_MAKER_NOTES) {
  let importDefaultResult4 = importDefault(dependencyMap[9]);
} else {
  importDefaultResult4 = {};
}

export default importDefaultResult(importDefaultResult(importDefaultResult(importDefaultResult(importDefaultResult(importDefaultResult(importDefaultResult(importDefaultResult({}, "0th", objectAssignResult), "1st", importDefault(dependencyMap[2])), "exif", objectAssignResult), "gps", importDefault(dependencyMap[4])), "interoperability", importDefault(dependencyMap[5])), "mpf", importDefaultResult2), "canon", importDefaultResult3), "pentax", importDefaultResult4);
export const IFD_TYPE_0TH = "0th";
export const IFD_TYPE_1ST = "1st";
export const IFD_TYPE_EXIF = "exif";
export const IFD_TYPE_GPS = "gps";
export const IFD_TYPE_INTEROPERABILITY = "interoperability";
export const IFD_TYPE_MPF = "mpf";
export const IFD_TYPE_CANON = "canon";
export const IFD_TYPE_PENTAX = "pentax";
