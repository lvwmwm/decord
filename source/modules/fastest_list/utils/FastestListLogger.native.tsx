// Module ID: 8579
// Function ID: 8580
// Name: logFastestListError
// Dependencies: [3, 1208, 2]
// Exports: logFastestListError

// Module 8579 (logFastestListError)
const tmp2 = new require("timestamp")("FastestList");
const result = require("set").fileFinishedImporting("modules/fastest_list/utils/FastestListLogger.native.tsx");

export const logFastestListError = function logFastestListError(arg0, extra) {
  tmp2.error(arg0, extra);
  let obj = importDefault(1208);
  obj = { extra };
  obj.captureMessage(arg0, obj);
};
