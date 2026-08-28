// Module ID: 7729
// Function ID: 7730
// Name: logFastestListError
// Dependencies: [3, 1208, 2]
// Exports: logFastestListError

// Module 7729 (logFastestListError)
import timestampDefault from "timestamp" /* 3 */;
import _modDef1208 from "module_1208" /* 1208 */;

let closure_2 = new timestampDefault("FastestList");
const tmp2 = new timestampDefault("FastestList");
const result = require("set").fileFinishedImporting("modules/fastest_list/utils/FastestListLogger.native.tsx");

export const logFastestListError = function logFastestListError(arg0, extra) {
  logger.error(arg0, extra);
  let obj = _modDef1208;
  obj = { extra };
  obj.captureMessage(arg0, obj);
};
