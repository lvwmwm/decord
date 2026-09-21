// Module ID: 14799
// Function ID: 14800
// Name: unavailableCommand
// Dependencies: [1074, 9581, 2]

// Module 14799 (unavailableCommand)
import Constants from "Constants" /* 1074 */;
import RPCErrorDefault from "RPCError" /* 9581 */;
import size from "module_2" /* 2 */;

const RPCErrors = Constants.RPCErrors;
const result = size.fileFinishedImporting("modules/rpc/helpers/unavailableCommand.tsx");

export const unsupportedCommand = {
  handler(cmd) {
    const obj = { errorCode: RPCErrors.INVALID_COMMAND };
    throw new RPCErrorDefault({ errorCode: RPCErrors.INVALID_COMMAND }, "Unsupported command: " + cmd.cmd);
  }
};
export const deprecatedCommand = {
  handler(cmd) {
    const obj = { errorCode: RPCErrors.INVALID_COMMAND };
    throw new RPCErrorDefault({ errorCode: RPCErrors.INVALID_COMMAND }, "Deprecated command: " + cmd.cmd);
  }
};
