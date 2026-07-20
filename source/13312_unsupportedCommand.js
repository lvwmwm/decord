// Module ID: 13312
// Function ID: 101144
// Name: unsupportedCommand
// Dependencies: []

// Module 13312 (unsupportedCommand)
const RPCErrors = require(dependencyMap[0]).RPCErrors;
let obj = {
  handler(cmd) {
    let tmp = importDefault(dependencyMap[1]);
    tmp = new tmp({ errorCode: RPCErrors.INVALID_COMMAND }, "Unsupported command: " + cmd.cmd);
    throw tmp;
  }
};
obj = {
  handler(cmd) {
    let tmp = importDefault(dependencyMap[1]);
    tmp = new tmp({ errorCode: RPCErrors.INVALID_COMMAND }, "Deprecated command: " + cmd.cmd);
    throw tmp;
  }
};
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("modules/rpc/helpers/unavailableCommand.tsx");

export const unsupportedCommand = obj;
export const deprecatedCommand = obj;
