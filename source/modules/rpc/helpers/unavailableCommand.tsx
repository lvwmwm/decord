// Module ID: 13841
// Function ID: 13842
// Name: unsupportedCommand
// Dependencies: [676, 10711, 2]

// Module 13841 (unsupportedCommand)
import { RPCErrors } from "ME";

let obj = {
  handler(cmd) {
    let tmp = importDefault(10711);
    tmp = new tmp({ errorCode: RPCErrors.INVALID_COMMAND }, "Unsupported command: " + cmd.cmd);
    throw tmp;
  }
};
obj = {
  handler(cmd) {
    let tmp = importDefault(10711);
    tmp = new tmp({ errorCode: RPCErrors.INVALID_COMMAND }, "Deprecated command: " + cmd.cmd);
    throw tmp;
  }
};
const result = require("set").fileFinishedImporting("modules/rpc/helpers/unavailableCommand.tsx");

export const unsupportedCommand = obj;
export const deprecatedCommand = obj;
