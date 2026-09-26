// Module ID: 14830
// Function ID: 14831
// Name: unavailableCommand
// Dependencies: [1074, 9613, 2]

// Module 14830 (unavailableCommand)
import Constants from "Constants" /* 1074 */;
import RPCErrorDefault from "RPCError" /* 9613 */;
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
