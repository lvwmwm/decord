// Module ID: 6737
// Function ID: 6738
// Name: SimpleLoadingModal
// Dependencies: [5040, 6738, 1987, 2]
// Exports: showSimpleLoadingModal

// Module 6737 (SimpleLoadingModal)
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5040 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault, onDismissed;

const result = size.fileFinishedImporting("modules/mobile_web_handoff/native/SimpleLoadingModal.tsx");

export const showSimpleLoadingModal = function showSimpleLoadingModal(c3, arg1) {
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
  const tmp2 = require("asyncRequire")(6738, dependencyMap.paths);
  const merged = Object.assign(arg1);
  pushLazy(tmp2, obj, c3, { animation: "none" });
};
