// Module ID: 13986
// Function ID: 13987
// Name: unsupportedCommand
// Dependencies: [676, 10824, 2]

// Module 13986 (unsupportedCommand)
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;
import prototypeDefault from "prototype" /* 10824 */;

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
