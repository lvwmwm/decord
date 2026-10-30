// Module ID: 16316
// Function ID: 16317
// Name: screenCapture
// Dependencies: [6444, 1072, 16255, 16247, 2]

// Module 16316 (screenCapture)
import Constants2 from "Constants" /* 1072 */;
import validateConjureAppFrameDefault from "validateConjureAppFrame" /* 16247 */;
import Constants from "Constants" /* 6444 */;
import CONTEXT_MENU_ICON_NAMES from "CONTEXT_MENU_ICON_NAMES" /* 16255 */;
import size from "module_2" /* 2 */;

let RPC_AUTHENTICATED_SCOPE;
let RPC_EMBEDDED_APP_SCOPE;
let RPC_SCOPE_CONFIG;
({ RPC_AUTHENTICATED_SCOPE, RPC_EMBEDDED_APP_SCOPE, RPC_SCOPE_CONFIG } = Constants);
const RPCCommands = Constants2.RPCCommands;
const items = [RPC_EMBEDDED_APP_SCOPE, RPC_AUTHENTICATED_SCOPE];
const obj = {};
const CAPTURE_SCREEN = RPCCommands.CAPTURE_SCREEN;
const obj2 = {
  scope: { [RPC_SCOPE_CONFIG.ANY]: items },
  handler(socket) {
    validateConjureAppFrameDefault(socket.socket);
    return { status: "unsupported" };
  }
};
obj[CAPTURE_SCREEN] = CONTEXT_MENU_ICON_NAMES.createRPCCommand(RPCCommands.CAPTURE_SCREEN, obj2);
const result = size.fileFinishedImporting("modules/rpc/native/server/commands/screenCapture.tsx");

export default obj;
