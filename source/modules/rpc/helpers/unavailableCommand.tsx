// Module ID: 13698
// Function ID: 13699
// Name: unsupportedCommand
// Dependencies: [676, 10536, 2]

// Module 13698 (unsupportedCommand)
import { RPCErrors } from "ME";

let obj = {
  handler(cmd) {
    let tmp = importDefault(10536);
    tmp = new tmp({ errorCode: RPCErrors.INVALID_COMMAND }, "Unsupported command: " + cmd.cmd);
    throw tmp;
  }
};
obj = {
  handler(cmd) {
    let tmp = importDefault(10536);
    tmp = new tmp({ errorCode: RPCErrors.INVALID_COMMAND }, "Deprecated command: " + cmd.cmd);
    throw tmp;
  }
};
const result = require("set").fileFinishedImporting("modules/rpc/helpers/unavailableCommand.tsx");

export const unsupportedCommand = obj;
export const deprecatedCommand = obj;
