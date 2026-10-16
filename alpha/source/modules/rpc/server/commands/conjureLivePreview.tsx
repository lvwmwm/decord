// Module ID: 15462
// Function ID: 15463
// Name: conjureLivePreview
// Dependencies: [5857, 1087, 15422, 15404, 10983, 2]

// Module 15462 (conjureLivePreview)
import Constants2 from "Constants" /* 1087 */;
import conjureLiveRelaunch from "conjureLiveRelaunch" /* 10983 */;
import validateConjureAppFrameDefault from "validateConjureAppFrame" /* 15404 */;
import Constants from "Constants" /* 5857 */;
import CONTEXT_MENU_ICON_NAMES from "CONTEXT_MENU_ICON_NAMES" /* 15422 */;
import size from "module_2" /* 2 */;

let RPC_AUTHENTICATED_SCOPE;
let RPC_EMBEDDED_APP_SCOPE;
let RPC_SCOPE_CONFIG;
({ RPC_AUTHENTICATED_SCOPE, RPC_EMBEDDED_APP_SCOPE, RPC_SCOPE_CONFIG } = Constants);
const RPCCommands = Constants2.RPCCommands;
const items = [RPC_EMBEDDED_APP_SCOPE, RPC_AUTHENTICATED_SCOPE];
let obj = {};
const RELAUNCH_FRAME = RPCCommands.RELAUNCH_FRAME;
let obj2 = {
  scope: { [RPC_SCOPE_CONFIG.ANY]: items },
  handler(args) {
    let applicationId;
    let obj2;
    const build = args.args.build;
    const obj = { relaunched: obj2.relaunchAppFramesForBuild(applicationId, build) };
    applicationId = validateConjureAppFrameDefault(args.socket).frame.applicationId;
    obj2 = conjureLiveRelaunch;
    return obj;
  }
};
obj[RELAUNCH_FRAME] = CONTEXT_MENU_ICON_NAMES.createRPCCommand(RPCCommands.RELAUNCH_FRAME, obj2);
const result = size.fileFinishedImporting("modules/rpc/server/commands/conjureLivePreview.tsx");

export default obj;
