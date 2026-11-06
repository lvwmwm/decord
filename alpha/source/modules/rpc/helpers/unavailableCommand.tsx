// Module ID: 16632
// Function ID: 16633
// Name: unavailableCommand
// Dependencies: [1072, 9432, 2]

// Module 16632 (unavailableCommand)
import Constants from "Constants" /* 1072 */;
import RPCErrorDefault from "RPCError" /* 9432 */;
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
