// Module ID: 9596
// Function ID: 9597
// Name: SimpleLoadingModal
// Dependencies: [6429, 9597, 2119, 2]
// Exports: showSimpleLoadingModal

// Module 9596 (SimpleLoadingModal)
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6429 */;
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
  const tmp2 = require("asyncRequire")(9597, dependencyMap.paths);
  const merged = Object.assign(arg1);
  pushLazy(tmp2, obj, c3, { animation: "none" });
}
