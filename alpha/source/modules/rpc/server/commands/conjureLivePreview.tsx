// Module ID: 14594
// Function ID: 14595
// Name: conjureLivePreview
// Dependencies: [5436, 11251, 5635, 1085, 14560, 14545, 11134, 12381, 2]

// Module 14594 (conjureLivePreview)
import conjureLiveRelaunch from "conjureLiveRelaunch" /* 12381 */;
import validateEmbeddedAppFrameDefault from "validateEmbeddedAppFrame" /* 14545 */;
import ApplicationStore from "ApplicationStore" /* 5436 */;
import ConjureProjectStore from "ConjureProjectStore" /* 11251 */;
import Constants_mod from "Constants" /* 5635 */;
import Constants_mod2 from "Constants" /* 1085 */;
import CONTEXT_MENU_ICON_NAMES from "CONTEXT_MENU_ICON_NAMES" /* 14560 */;
import size from "module_2" /* 2 */;

let RPCCommands;
let RPC_AUTHENTICATED_SCOPE;
let RPC_EMBEDDED_APP_SCOPE;
let RPC_SCOPE_CONFIG;
let hasOwnProperty;
let tmp;
const RPCErrorDefault = tmp(11134);
let Constants = Constants_mod2;
({ RPC_AUTHENTICATED_SCOPE, RPC_EMBEDDED_APP_SCOPE, RPC_SCOPE_CONFIG } = Constants);
Constants = Constants_mod2;
({ RPCCommands, RPCErrors: hasOwnProperty } = Constants);
const items = [RPC_EMBEDDED_APP_SCOPE, RPC_AUTHENTICATED_SCOPE];
let obj = {};
const RELAUNCH_FRAME = RPCCommands.RELAUNCH_FRAME;
let obj2 = {
  scope: { [RPC_SCOPE_CONFIG.ANY]: items },
  handler(args) {
    let obj3;
    const build = args.args.build;
    const applicationId = validateEmbeddedAppFrameDefault(args.socket).frame.applicationId;
    const application = ApplicationStore.getApplication(applicationId);
    let prop;
    if (application != null) {
      prop = application.vibegrationsProjectId;
    }
    if (null == prop) {
      if (!ConjureProjectStore.isConjureProjectApplication(applicationId)) {
        const self = this;
        const self2 = this;
        const obj = { errorCode: hasOwnProperty.UNAUTHORIZED_FOR_APPLICATION };
        const tmp8 = new RPCErrorDefault(obj, "Only a Conjuring app frame can relaunch");
        throw tmp8;
      }
    }
    const obj2 = { relaunched: obj3.relaunchAppFramesForBuild(applicationId, build) };
    obj3 = conjureLiveRelaunch;
    return obj2;
  }
};
obj[RELAUNCH_FRAME] = CONTEXT_MENU_ICON_NAMES.createRPCCommand(RPCCommands.RELAUNCH_FRAME, obj2);
const result = size.fileFinishedImporting("modules/rpc/server/commands/conjureLivePreview.tsx");

export default obj;
