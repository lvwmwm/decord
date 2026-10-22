// Module ID: 18650
// Function ID: 18651
// Name: logThirdPartyImportsDone
// Dependencies: [3, 2]

// Module 18650 (logThirdPartyImportsDone)
import LoggerDefault from "Logger" /* 3 */;
import size from "module_2" /* 2 */;

const obj = new LoggerDefault("app");
obj.log("Finished loading third party imports");
const result = size.fileFinishedImporting("modules/debug/logThirdPartyImportsDone.tsx");
