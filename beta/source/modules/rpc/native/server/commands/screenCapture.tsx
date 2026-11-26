// Module ID: 15755
// Function ID: 15756
// Name: screenCapture
// Dependencies: [6354, 1071, 15692, 15684, 2]

// Module 15755 (screenCapture)
import Constants2 from "Constants" /* 1071 */;
import validateConjureAppFrameDefault from "validateConjureAppFrame" /* 15684 */;
import Constants from "Constants" /* 6354 */;
import CONTEXT_MENU_ICON_NAMES from "CONTEXT_MENU_ICON_NAMES" /* 15692 */;
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
