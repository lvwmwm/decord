// Module ID: 14082
// Function ID: 14083
// Name: unavailableCommand
// Dependencies: [1086, 8765, 2]

// Module 14082 (unavailableCommand)
import Constants from "Constants" /* 1086 */;
import RPCErrorDefault from "RPCError" /* 8765 */;
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
