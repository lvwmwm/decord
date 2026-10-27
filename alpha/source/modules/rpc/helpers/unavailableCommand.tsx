// Module ID: 15818
// Function ID: 15819
// Name: unavailableCommand
// Dependencies: [1084, 9264, 2]

// Module 15818 (unavailableCommand)
import Constants from "Constants" /* 1084 */;
import RPCErrorDefault from "RPCError" /* 9264 */;
import size from "module_2" /* 2 */;

const RPCErrors = Constants.RPCErrors;
let obj = {
  handler(cmd) {
    const obj = { errorCode: RPCErrors.INVALID_COMMAND };
    const tmp = RPCErrorDefault;
    const tmp2 = new tmp(obj, "Unsupported command: " + cmd.cmd);
    throw tmp2;
  }
};
const obj2 = {
  handler(cmd) {
    const obj = { errorCode: RPCErrors.INVALID_COMMAND };
    const tmp = RPCErrorDefault;
    const tmp2 = new tmp(obj, "Deprecated command: " + cmd.cmd);
    throw tmp2;
  }
};
const result = size.fileFinishedImporting("modules/rpc/helpers/unavailableCommand.tsx");

export const unsupportedCommand = obj;
export const deprecatedCommand = obj2;
