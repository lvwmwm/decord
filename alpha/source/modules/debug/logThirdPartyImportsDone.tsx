// Module ID: 20209
// Function ID: 20210
// Name: logThirdPartyImportsDone
// Dependencies: [3, 2]

// Module 20209 (logThirdPartyImportsDone)
import LoggerDefault from "Logger" /* 3 */;
import size from "module_2" /* 2 */;

const obj = new LoggerDefault("app");
obj.log("Finished loading third party imports");
const result = size.fileFinishedImporting("modules/debug/logThirdPartyImportsDone.tsx");
