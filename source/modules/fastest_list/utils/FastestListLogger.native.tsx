// Module ID: 9240
// Function ID: 72247
// Name: logFastestListError
// Dependencies: []
// Exports: logFastestListError

// Module 9240 (logFastestListError)
let importDefaultResult = importDefault(dependencyMap[0]);
importDefaultResult = new importDefaultResult("FastestList");
const result = arg1(dependencyMap[2]).fileFinishedImporting("modules/fastest_list/utils/FastestListLogger.native.tsx");

export const logFastestListError = function logFastestListError(arg0, extra) {
  importDefaultResult.error(arg0, extra);
  let obj = importDefault(dependencyMap[1]);
  obj = { extra };
  obj.captureMessage(arg0, obj);
};
