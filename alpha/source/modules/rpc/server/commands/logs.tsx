// Module ID: 16244
// Function ID: 16245
// Name: logs
// Dependencies: [1084, 3, 16215, 11574, 2]

// Module 16244 (logs)
import LoggerDefault from "Logger" /* 3 */;
import RPCHelpers from "RPCHelpers" /* 11574 */;
import Constants from "Constants" /* 1084 */;
import CONTEXT_MENU_ICON_NAMES from "CONTEXT_MENU_ICON_NAMES" /* 16215 */;
import size from "module_2" /* 2 */;

let RPCCommands;
let RPC_APPLICATION_LOGGING_CATEGORY;
({ RPCCommands, RPC_APPLICATION_LOGGING_CATEGORY } = Constants);
let closure_2 = new LoggerDefault(RPC_APPLICATION_LOGGING_CATEGORY);
let obj = {};
const CAPTURE_LOG = RPCCommands.CAPTURE_LOG;
const tmp3 = new LoggerDefault(RPC_APPLICATION_LOGGING_CATEGORY);
const obj2 = {
  handler(arg0) {
    let args;
    let socket;
    ({ socket, args } = arg0);
    const level = args.level;
    const message = args.message;
    const obj = RPCHelpers;
    const result = obj.validatePostMessageTransport(socket.transport);
    const combined = "" + socket.application.id + " - " + message;
    if ("log" === level) {
      closure_2.log(combined);
    } else if ("warn" === level) {
      closure_2.warn(combined);
    } else if ("debug" === level) {
      closure_2.verbose(combined);
    } else if ("info" === level) {
      closure_2.info(combined);
    } else if ("error" === level) {
      closure_2.error(combined);
    }
  }
};
obj[CAPTURE_LOG] = CONTEXT_MENU_ICON_NAMES.createRPCCommand(RPCCommands.CAPTURE_LOG, obj2);
let result = size.fileFinishedImporting("modules/rpc/server/commands/logs.tsx");

export default obj;
