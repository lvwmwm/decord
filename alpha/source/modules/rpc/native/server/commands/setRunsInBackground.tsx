// Module ID: 15672
// Function ID: 15673
// Name: setRunsInBackground
// Dependencies: [6754, 6357, 1087, 5591, 6755, 15621, 15605, 10724, 2]

// Module 15672 (setRunsInBackground)
import Constants2 from "Constants" /* 1087 */;
import ActivityPanelConstants from "ActivityPanelConstants" /* 5591 */;
import FramesConstants from "FramesConstants" /* 6755 */;
import FramesActionCreatorsDefault from "FramesActionCreators" /* 10724 */;
import validateConjureAppFrameDefault from "validateConjureAppFrame" /* 15605 */;
import FramesStore from "FramesStore" /* 6754 */;
import Constants from "Constants" /* 6357 */;
import CONTEXT_MENU_ICON_NAMES from "CONTEXT_MENU_ICON_NAMES" /* 15621 */;
import size from "module_2" /* 2 */;

let RPC_AUTHENTICATED_SCOPE;
let RPC_EMBEDDED_APP_SCOPE;
let RPC_SCOPE_CONFIG;
let items;
({ RPC_AUTHENTICATED_SCOPE, RPC_EMBEDDED_APP_SCOPE, RPC_SCOPE_CONFIG } = Constants);
const RPCCommands = Constants2.RPCCommands;
const ActivityPanelModes = ActivityPanelConstants.ActivityPanelModes;
const FrameIntent = FramesConstants.FrameIntent;
let obj = {};
const SET_RUNS_IN_BACKGROUND = RPCCommands.SET_RUNS_IN_BACKGROUND;
const obj2 = {
  scope: { [RPC_SCOPE_CONFIG.ANY]: items },
  handler(args) {
    const enabled = args.args.enabled;
    const frame = validateConjureAppFrameDefault(args.socket).frame;
    const obj = FramesActionCreatorsDefault;
    const result = obj.setFrameRunsInBackground(frame.id, enabled);
    let tmp4 = enabled;
    if (!tmp4) {
      tmp4 = frame.intent !== FrameIntent.INLINE;
    }
    if (!tmp4) {
      tmp4 = frame.data.activityPanelMode !== ActivityPanelModes.PIP;
    }
    if (!tmp4) {
      const mainFrame = FramesStore.getMainFrame();
      let id;
      if (mainFrame != null) {
        id = mainFrame.id;
      }
      tmp4 = id !== frame.id;
    }
    if (!tmp4) {
      const tmpResult = FramesActionCreatorsDefault;
      tmpResult.demoteMainFrame(frame.id);
    }
    return { enabled };
  }
};
items = [RPC_EMBEDDED_APP_SCOPE, RPC_AUTHENTICATED_SCOPE];
obj[SET_RUNS_IN_BACKGROUND] = CONTEXT_MENU_ICON_NAMES.createRPCCommand(RPCCommands.SET_RUNS_IN_BACKGROUND, obj2);
let result = size.fileFinishedImporting("modules/rpc/native/server/commands/setRunsInBackground.tsx");

export default obj;
