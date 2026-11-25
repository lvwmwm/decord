// Module ID: 15837
// Function ID: 15838
// Name: commands/confirmModal
// Dependencies: [5766, 1071, 15838, 15822, 15815, 15839, 2]

// Module 15837 (commands/confirmModal)
import Constants from "Constants" /* 1071 */;
import Constants2 from "Constants" /* 5766 */;
import validateEmbeddedAppFrameDefault from "validateEmbeddedAppFrame" /* 15815 */;
import _asyncToGeneratorDefault from "_asyncToGenerator" /* 15838 */;
import CONTEXT_MENU_ICON_NAMES from "CONTEXT_MENU_ICON_NAMES" /* 15822 */;
import size from "module_2" /* 2 */;

let c1, title;

const RPC_EMBEDDED_APP_SCOPE = Constants2.RPC_EMBEDDED_APP_SCOPE;
const RPCCommands = Constants.RPCCommands;
let closure_3 = _asyncToGeneratorDefault({ cooldownMs: 0 });
let obj = {};
const SHOW_CONFIRM_MODAL = RPCCommands.SHOW_CONFIRM_MODAL;
let obj2 = {
  scope: RPC_EMBEDDED_APP_SCOPE,
  handler(arg0) {
    let _undefined;
    let args;
    let body;
    let cancelText;
    let closure_4;
    let promise;
    let socket;
    ({ socket, args } = arg0);
    let type = args.type;
    ({ title: importDefault, body: dependencyMap, confirm_text: closure_3, cancel_text: closure_4 } = args);
    const iframeId = validateEmbeddedAppFrameDefault(socket).iframeId;
    const tryAcquireResult = confirmText.tryAcquire(socket);
    let c6 = tryAcquireResult;
    if (null == tryAcquireResult) {
      const str = "confirm";
      promise = "confirm" === type ? { confirmed: false } : { acknowledged: false };
    } else {
      let tmp2 = globalThis;
      const self = this;
      const self2 = this;
      promise = new Promise((fn) => {
        type = fn;
        title = false;
        let obj = type(dependencyMap[5]);
        let obj2 = {
          iframeId,
          type,
          title,
          body: dependencyMap,
          confirmText,
          cancelText,
          onSettle: function settle(confirmed) {
            const tmp = c1;
            if (!tmp) {
              let obj;
              c1 = true;
              c6();
              const tmp5 = fn;
              if ("confirm" === type) {
                obj = { confirmed };
                const obj2 = { confirmed };
              } else {
                obj = { acknowledged: confirmed };
              }
              tmp5(obj);
            }
          }
        };
        let tmp = type;
        if (!obj.openFrameConfirmModal(obj2)) {
          const tmp2 = title;
          if (!tmp2) {
            title = true;
            _undefined();
            let tmp5 = fn("confirm" === tmp ? { confirmed: false } : { acknowledged: false });
          }
        }
      });
    }
    return promise;
  }
};
obj[SHOW_CONFIRM_MODAL] = CONTEXT_MENU_ICON_NAMES.createRPCCommand(RPCCommands.SHOW_CONFIRM_MODAL, obj2);
const result = size.fileFinishedImporting("modules/rpc/server/commands/confirmModal.tsx");

export default obj;
