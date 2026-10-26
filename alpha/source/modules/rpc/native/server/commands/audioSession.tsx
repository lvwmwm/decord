// Module ID: 15771
// Function ID: 15772
// Name: audioSession
// Dependencies: [5, 6378, 1087, 15724, 1384, 9264, 15708, 7907, 2]

// Module 15771 (audioSession)
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import Constants_mod from "Constants" /* 6378 */;
import Constants_mod2 from "Constants" /* 1087 */;
import CONTEXT_MENU_ICON_NAMES from "CONTEXT_MENU_ICON_NAMES" /* 15724 */;
import size from "module_2" /* 2 */;

let RPCCommands;
let RPC_AUTHENTICATED_SCOPE;
let RPC_EMBEDDED_APP_SCOPE;
let RPC_SCOPE_CONFIG;
let closure_4;
let items;
let Constants = Constants_mod2;
({ RPC_AUTHENTICATED_SCOPE, RPC_EMBEDDED_APP_SCOPE, RPC_SCOPE_CONFIG } = Constants);
Constants = Constants_mod2;
({ RPCCommands, RPCErrors: closure_4 } = Constants);
const obj = {};
const SET_AUDIO_SESSION_TYPE = RPCCommands.SET_AUDIO_SESSION_TYPE;
const obj2 = {
  scope: { [RPC_SCOPE_CONFIG.ANY]: items },
  handler(socket) {
    socket = socket.socket;
    const type = socket.args.type;
    return (async function() {
      let c1;
      let v3;
      const obj9 = socket(dependencyMap[4]);
      if (!obj9.isIOS()) {
        const obj5 = { errorCode: constants.INVALID_COMMAND };
        const self = this;
        const self2 = this;
        const tmp6 = new type(dependencyMap[5])(obj5, "Audio session type is only supported on iOS");
        throw tmp6;
      }
      const iframeId = tmp17(tmp16[6])(socket).iframeId;
      const tmp15Result = tmp15(dependencyMap[7]);
      const webViewProxy = tmp15Result.getWebViewProxy(iframeId);
      const _JSON = JSON;
      const _HermesInternal = HermesInternal;
      await webViewProxy.injectJavaScript("try { if (navigator.audioSession != null) navigator.audioSession.type = " + JSON.stringify(type) + "; } catch (e) {} true;");
      return { success: true };
    })();
  }
};
items = [RPC_EMBEDDED_APP_SCOPE, RPC_AUTHENTICATED_SCOPE];
obj[SET_AUDIO_SESSION_TYPE] = CONTEXT_MENU_ICON_NAMES.createRPCCommand(RPCCommands.SET_AUDIO_SESSION_TYPE, obj2);
const result = size.fileFinishedImporting("modules/rpc/native/server/commands/audioSession.tsx");

export default obj;
