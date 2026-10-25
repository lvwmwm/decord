// Module ID: 15777
// Function ID: 15778
// Name: frameRelaunchDeepLink
// Dependencies: [6378, 1087, 15725, 15709, 9264, 7434, 10728, 2]

// Module 15777 (frameRelaunchDeepLink)
import validateConjureAppFrameDefault from "validateConjureAppFrame" /* 15709 */;
import Constants_mod from "Constants" /* 6378 */;
import Constants_mod2 from "Constants" /* 1087 */;
import CONTEXT_MENU_ICON_NAMES from "CONTEXT_MENU_ICON_NAMES" /* 15725 */;
import size from "module_2" /* 2 */;

let RPCCommands;
let RPC_AUTHENTICATED_SCOPE;
let RPC_EMBEDDED_APP_SCOPE;
let RPC_SCOPE_CONFIG;
let c3;
let closure_4;
let items;
let tmp;
const RPCErrorDefault = tmp(9264);
let Constants = Constants_mod2;
({ RPC_AUTHENTICATED_SCOPE, RPC_EMBEDDED_APP_SCOPE, RPC_SCOPE_CONFIG } = Constants);
Constants = Constants_mod2;
({ RPCCommands, RPCErrors: c3, RPCEvents: closure_4 } = Constants);
const re5 = /[\u0000-\u001f\u007f]/;
let obj = {};
const SET_FRAME_RELAUNCH_DEEP_LINK = RPCCommands.SET_FRAME_RELAUNCH_DEEP_LINK;
let obj2 = {
  scope: { [RPC_SCOPE_CONFIG.ANY]: items },
  handler(socket) {
    socket = socket.socket;
    const args = socket.args;
    const server = socket.server;
    const frame = validateConjureAppFrameDefault(socket).frame;
    if (regex.test(args.hash)) {
      const self = this;
      const self2 = this;
      const obj2 = { errorCode: constants.INVALID_PAYLOAD };
      const tmp12 = new RPCErrorDefault(obj2, "hash must not contain control characters");
      throw tmp12;
    } else {
      let substr;
      const hash = args.hash;
      const hash1 = args.hash;
      if (hash.startsWith("#")) {
        substr = hash1.slice(1);
      } else {
        substr = hash1;
      }
      const obj = socket(7434);
      const frameDeepLinkChannelId = obj.getFrameDeepLinkChannelId(frame);
      const subscriptions = server.subscriptions;
      let tmp8 = null != frameDeepLinkChannelId;
      const someResult = subscriptions.some((socket) => socket.socket === socket && socket.evt === constants.FRAME_DEEP_LINK);
      if (tmp8) {
        const tmp4Result = socket(10728);
        tmp8 = !tmp4Result.isConjurePreviewSurface(frame.surface);
      }
      if (tmp8) {
        tmp8 = someResult;
      }
      if (tmp8) {
        const tmp4Result2 = socket(7434);
        const result = tmp4Result2.setFrameRelaunchDeepLink(frameDeepLinkChannelId, frame.applicationId, substr);
      }
      return { hash: substr };
    }
  }
};
items = [RPC_EMBEDDED_APP_SCOPE, RPC_AUTHENTICATED_SCOPE];
obj[SET_FRAME_RELAUNCH_DEEP_LINK] = CONTEXT_MENU_ICON_NAMES.createRPCCommand(RPCCommands.SET_FRAME_RELAUNCH_DEEP_LINK, obj2);
let result = size.fileFinishedImporting("modules/rpc/server/commands/frameRelaunchDeepLink.tsx");

export default obj;
