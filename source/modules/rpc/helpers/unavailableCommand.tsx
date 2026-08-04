// Module ID: 13690
// Function ID: 13691
// Name: unsupportedCommand
// Dependencies: [676, 10543, 2]

// Module 13690 (unsupportedCommand)
import { RPCErrors } from "ME";

let obj = {
  handler(cmd) {
    let tmp = importDefault(10543);
    tmp = new tmp({ errorCode: RPCErrors.INVALID_COMMAND }, "Unsupported command: " + cmd.cmd);
    throw tmp;
  }
};
obj = {
  handler(cmd) {
    let tmp = importDefault(10543);
    tmp = new tmp({ errorCode: RPCErrors.INVALID_COMMAND }, "Deprecated command: " + cmd.cmd);
    throw tmp;
  }
};
const result = require("set").fileFinishedImporting("modules/rpc/helpers/unavailableCommand.tsx");

export const unsupportedCommand = obj;
export const deprecatedCommand = obj;
