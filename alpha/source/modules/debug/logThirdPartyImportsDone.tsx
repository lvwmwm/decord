// Module ID: 19423
// Function ID: 19424
// Name: logThirdPartyImportsDone
// Dependencies: [3, 2]

// Module 19423 (logThirdPartyImportsDone)
import LoggerDefault from "Logger" /* 3 */;
import size from "module_2" /* 2 */;

const obj = new LoggerDefault("app");
obj.log("Finished loading third party imports");
const result = size.fileFinishedImporting("modules/debug/logThirdPartyImportsDone.tsx");
