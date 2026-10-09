// Module ID: 14693
// Function ID: 14694
// Name: conjureLivePreview
// Dependencies: [5636, 1085, 14659, 14639, 11385, 2]

// Module 14693 (conjureLivePreview)
import Constants2 from "Constants" /* 1085 */;
import conjureLiveRelaunch from "conjureLiveRelaunch" /* 11385 */;
import validateConjureAppFrameDefault from "validateConjureAppFrame" /* 14639 */;
import Constants from "Constants" /* 5636 */;
import CONTEXT_MENU_ICON_NAMES from "CONTEXT_MENU_ICON_NAMES" /* 14659 */;
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
