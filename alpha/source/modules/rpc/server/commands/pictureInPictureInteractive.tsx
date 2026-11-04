// Module ID: 16612
// Function ID: 16613
// Name: pictureInPictureInteractive
// Dependencies: [6585, 1072, 6982, 11889, 16548, 16540, 11114, 16613, 2]

// Module 16612 (pictureInPictureInteractive)
import Constants2 from "Constants" /* 1072 */;
import FramesConstants from "FramesConstants" /* 6982 */;
import FramesActionCreatorsDefault from "FramesActionCreators" /* 11114 */;
import Constants3 from "Constants" /* 11889 */;
import validateConjureAppFrameDefault from "validateConjureAppFrame" /* 16540 */;
import conjureBackgroundFrames from "conjureBackgroundFrames" /* 16613 */;
import Constants from "Constants" /* 6585 */;
import CONTEXT_MENU_ICON_NAMES_mod from "CONTEXT_MENU_ICON_NAMES" /* 16548 */;
import size from "module_2" /* 2 */;

let RPC_AUTHENTICATED_SCOPE;
let RPC_EMBEDDED_APP_SCOPE;
let RPC_SCOPE_CONFIG;
let items;
let items1;
({ RPC_AUTHENTICATED_SCOPE, RPC_EMBEDDED_APP_SCOPE, RPC_SCOPE_CONFIG } = Constants);
const RPCCommands = Constants2.RPCCommands;
const FrameLayoutModes = FramesConstants.FrameLayoutModes;
const ActivityLayoutMode = Constants3.ActivityLayoutMode;
let obj = {};
const FRAME_PICTURE_IN_PICTURE_HANDSHAKE = RPCCommands.FRAME_PICTURE_IN_PICTURE_HANDSHAKE;
let CONTEXT_MENU_ICON_NAMES = CONTEXT_MENU_ICON_NAMES_mod;
let obj2 = {
  scope: { [RPC_SCOPE_CONFIG.ANY]: items },
  handler(socket) {
    let layout_mode;
    const frame = validateConjureAppFrameDefault(socket.socket).frame;
    const obj = FramesActionCreatorsDefault;
    const result = obj.setFramePictureInPictureInteractive(frame.id, true);
    if (frame.data.layoutMode === FrameLayoutModes.PIP) {
      layout_mode = ActivityLayoutMode.PIP;
    } else {
      layout_mode = ActivityLayoutMode.FOCUSED;
    }
    return { layout_mode };
  }
};
items = [RPC_EMBEDDED_APP_SCOPE, RPC_AUTHENTICATED_SCOPE];
obj[FRAME_PICTURE_IN_PICTURE_HANDSHAKE] = CONTEXT_MENU_ICON_NAMES.createRPCCommand(RPCCommands.FRAME_PICTURE_IN_PICTURE_HANDSHAKE, obj2);
const FRAME_PICTURE_IN_PICTURE_OPEN = RPCCommands.FRAME_PICTURE_IN_PICTURE_OPEN;
CONTEXT_MENU_ICON_NAMES = CONTEXT_MENU_ICON_NAMES_mod;
const obj3 = {
  scope: { [RPC_SCOPE_CONFIG.ANY]: items1 },
  handler(socket) {
    let obj2;
    const frame = validateConjureAppFrameDefault(socket.socket).frame;
    if (frame.data.layoutMode === FrameLayoutModes.PIP) {
      if (frame.data.pictureInPictureInteractive) {
        ({ opened: obj2.returnToConjureFrameSurface(frame) });
        obj2 = conjureBackgroundFrames;
      }
      return { opened: false };
    }
  }
};
items1 = [RPC_EMBEDDED_APP_SCOPE, RPC_AUTHENTICATED_SCOPE];
obj[FRAME_PICTURE_IN_PICTURE_OPEN] = CONTEXT_MENU_ICON_NAMES.createRPCCommand(RPCCommands.FRAME_PICTURE_IN_PICTURE_OPEN, obj3);
let result = size.fileFinishedImporting("modules/rpc/server/commands/pictureInPictureInteractive.tsx");

export default obj;
