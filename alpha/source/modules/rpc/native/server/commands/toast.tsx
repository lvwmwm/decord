// Module ID: 15892
// Function ID: 15893
// Name: toast
// Dependencies: [5766, 1071, 15822, 15815, 15893, 5695, 2]

// Module 15892 (toast)
import Constants from "Constants" /* 1071 */;
import toastUtils from "toastUtils" /* 5695 */;
import Constants2 from "Constants" /* 5766 */;
import validateEmbeddedAppFrameDefault from "validateEmbeddedAppFrame" /* 15815 */;
import frameToast from "frameToast" /* 15893 */;
import CONTEXT_MENU_ICON_NAMES from "CONTEXT_MENU_ICON_NAMES" /* 15822 */;
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
