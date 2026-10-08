// Module ID: 6739
// Function ID: 6740
// Name: FastestListLogger
// Dependencies: [3, 1254, 2]
// Exports: logFastestListError

// Module 6739 (FastestListLogger)
import LoggerDefault from "Logger" /* 3 */;
import SentryUtilsDefault from "SentryUtils" /* 1254 */;
import size from "module_2" /* 2 */;

const logger = new LoggerDefault("FastestList");
new LoggerDefault("FastestList");
const result = size.fileFinishedImporting("modules/fastest_list/utils/FastestListLogger.native.tsx");

export const logFastestListError = function logFastestListError(arg0, extra) {
  logger.error(arg0, extra);
  const obj = SentryUtilsDefault;
  const obj2 = { extra };
  obj.captureMessage(arg0, obj2);
};
