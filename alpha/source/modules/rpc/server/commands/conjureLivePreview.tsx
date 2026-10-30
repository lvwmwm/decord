// Module ID: 16306
// Function ID: 16307
// Name: conjureLivePreview
// Dependencies: [6444, 1072, 16255, 16247, 10925, 2]

// Module 16306 (conjureLivePreview)
import Constants2 from "Constants" /* 1072 */;
import conjureLiveRelaunch from "conjureLiveRelaunch" /* 10925 */;
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
