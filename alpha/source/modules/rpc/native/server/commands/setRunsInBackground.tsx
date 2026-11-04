// Module ID: 16598
// Function ID: 16599
// Name: setRunsInBackground
// Dependencies: [6981, 6585, 1072, 5791, 6982, 16536, 16528, 11114, 2]

// Module 16598 (setRunsInBackground)
import Constants2 from "Constants" /* 1072 */;
import ActivityPanelConstants from "ActivityPanelConstants" /* 5791 */;
import FramesConstants from "FramesConstants" /* 6982 */;
import FramesActionCreatorsDefault from "FramesActionCreators" /* 11114 */;
import validateConjureAppFrameDefault from "validateConjureAppFrame" /* 16528 */;
import FramesStore from "FramesStore" /* 6981 */;
import Constants from "Constants" /* 6585 */;
import CONTEXT_MENU_ICON_NAMES from "CONTEXT_MENU_ICON_NAMES" /* 16536 */;
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
