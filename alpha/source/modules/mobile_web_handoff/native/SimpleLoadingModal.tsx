// Module ID: 7254
// Function ID: 7255
// Name: SimpleLoadingModal
// Dependencies: [6150, 7255, 2000, 2]
// Exports: showSimpleLoadingModal

// Module 7254 (SimpleLoadingModal)
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6150 */;
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
  const tmp2 = require("asyncRequire")(7255, dependencyMap.paths);
  const merged = Object.assign(arg1);
  pushLazy(tmp2, obj, c3, { animation: "none" });
};
