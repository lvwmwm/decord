// Module ID: 15950
// Function ID: 15951
// Name: toast
// Dependencies: [5797, 1071, 15880, 15873, 15951, 5726, 2]

// Module 15950 (toast)
import Constants from "Constants" /* 1071 */;
import toastUtils from "toastUtils" /* 5726 */;
import Constants2 from "Constants" /* 5797 */;
import validateEmbeddedAppFrameDefault from "validateEmbeddedAppFrame" /* 15873 */;
import frameToast from "frameToast" /* 15951 */;
import CONTEXT_MENU_ICON_NAMES from "CONTEXT_MENU_ICON_NAMES" /* 15880 */;
import size from "module_2" /* 2 */;

const RPC_EMBEDDED_APP_SCOPE = Constants2.RPC_EMBEDDED_APP_SCOPE;
const RPCCommands = Constants.RPCCommands;
let obj = {};
const SHOW_TOAST = RPCCommands.SHOW_TOAST;
let obj2 = {
  scope: RPC_EMBEDDED_APP_SCOPE,
  handler(args) {
    let message;
    let obj3;
    let type;
    ({ message, type } = args.args);
    const iframeId = validateEmbeddedAppFrameDefault(args.socket).iframeId;
    const obj = frameToast;
    if (obj.canShowFrameToast(iframeId)) {
      const obj2 = { text: message, variant: frameToast.FRAME_TOAST_VARIANTS[type] };
      const showToast = toastUtils.showToast;
      toastUtils;
      showToast(obj2);
      obj3 = { shown: true };
    } else {
      obj3 = { shown: false };
    }
    return obj3;
  }
};
obj[SHOW_TOAST] = CONTEXT_MENU_ICON_NAMES.createRPCCommand(RPCCommands.SHOW_TOAST, obj2);
const result = size.fileFinishedImporting("modules/rpc/native/server/commands/toast.tsx");

export default obj;
