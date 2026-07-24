// Module ID: 13495
// Function ID: 103705
// Name: unsupportedCommand
// Dependencies: [653, 10525, 2]

// Module 13495 (unsupportedCommand)
import { RPCErrors } from "ME";

let obj = {
  handler(cmd) {
    let tmp = importDefault(10525);
    tmp = new tmp({ errorCode: RPCErrors.INVALID_COMMAND }, "Unsupported command: " + cmd.cmd);
    throw tmp;
  }
};
obj = {
  handler(cmd) {
    let tmp = importDefault(10525);
    tmp = new tmp({ errorCode: RPCErrors.INVALID_COMMAND }, "Deprecated command: " + cmd.cmd);
    throw tmp;
  }
};
const result = require("set").fileFinishedImporting("modules/rpc/helpers/unavailableCommand.tsx");

export const unsupportedCommand = obj;
export const deprecatedCommand = obj;
