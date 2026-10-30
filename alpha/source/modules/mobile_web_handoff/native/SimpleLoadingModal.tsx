// Module ID: 7498
// Function ID: 7499
// Name: SimpleLoadingModal
// Dependencies: [6738, 7499, 1995, 2]
// Exports: showSimpleLoadingModal

// Module 7498 (SimpleLoadingModal)
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6738 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault, onDismissed;

const result = size.fileFinishedImporting("modules/mobile_web_handoff/native/SimpleLoadingModal.tsx");

export function showSimpleLoadingModal(c3, arg1) {
  _require = c3;
  importDefault = arg1;
  const pushLazy = ModalActionCreatorsDefault.pushLazy;
  ModalActionCreatorsDefault;
  let obj = {
    onDismissed() {
      const obj = ModalActionCreatorsDefault;
      obj.popWithKey(closure_0);
      onDismissed = onDismissed.onDismissed;
      if (onDismissed != null) {
        onDismissed();
      }
    }
  };
  const tmp2 = require("asyncRequire")(7499, dependencyMap.paths);
  const merged = Object.assign(arg1);
  pushLazy(tmp2, obj, c3, { animation: "none" });
}
