// Module ID: 13853
// Function ID: 13854
// Name: unsupportedCommand
// Dependencies: [676, 10727, 2]

// Module 13853 (unsupportedCommand)
import { RPCErrors } from "ME";

let obj = {
  handler(cmd) {
    let tmp = importDefault(10727);
    tmp = new tmp({ errorCode: RPCErrors.INVALID_COMMAND }, "Unsupported command: " + cmd.cmd);
    throw tmp;
  }
};
obj = {
  handler(cmd) {
    let tmp = importDefault(10727);
    tmp = new tmp({ errorCode: RPCErrors.INVALID_COMMAND }, "Deprecated command: " + cmd.cmd);
    throw tmp;
  }
};
const result = require("set").fileFinishedImporting("modules/rpc/helpers/unavailableCommand.tsx");

export const unsupportedCommand = obj;
export const deprecatedCommand = obj;
