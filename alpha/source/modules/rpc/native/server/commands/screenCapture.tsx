// Module ID: 16866
// Function ID: 16867
// Name: screenCapture
// Dependencies: [6698, 1072, 16804, 16796, 2]

// Module 16866 (screenCapture)
import Constants2 from "Constants" /* 1072 */;
import validateConjureAppFrameDefault from "validateConjureAppFrame" /* 16796 */;
import Constants from "Constants" /* 6698 */;
import CONTEXT_MENU_ICON_NAMES from "CONTEXT_MENU_ICON_NAMES" /* 16804 */;
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
