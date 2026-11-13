// Module ID: 19825
// Function ID: 19826
// Name: logThirdPartyImportsDone
// Dependencies: [3, 2]

// Module 19825 (logThirdPartyImportsDone)
import LoggerDefault from "Logger" /* 3 */;
import size from "module_2" /* 2 */;

const obj = new LoggerDefault("app");
obj.log("Finished loading third party imports");
const result = size.fileFinishedImporting("modules/debug/logThirdPartyImportsDone.tsx");
