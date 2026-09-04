// Module ID: 14443
// Function ID: 14444
// Name: unsupportedCommand
// Dependencies: [673, 9483, 2]

// Module 14443 (unsupportedCommand)
import set from "set" /* 2 */;
import ME from "ME" /* 673 */;
import prototypeDefault from "prototype" /* 9483 */;

const RPCErrors = ME.RPCErrors;
let obj = {
  handler(cmd) {
    let tmp = prototypeDefault;
    tmp = new tmp({ errorCode: RPCErrors.INVALID_COMMAND }, "Unsupported command: " + cmd.cmd);
    throw tmp;
  }
};
obj = {
  handler(cmd) {
    let tmp = prototypeDefault;
    tmp = new tmp({ errorCode: RPCErrors.INVALID_COMMAND }, "Deprecated command: " + cmd.cmd);
    throw tmp;
  }
};
const result = set.fileFinishedImporting("modules/rpc/helpers/unavailableCommand.tsx");

export const unsupportedCommand = obj;
export const deprecatedCommand = obj;
