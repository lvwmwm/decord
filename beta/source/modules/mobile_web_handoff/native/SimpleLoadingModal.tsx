// Module ID: 7593
// Function ID: 7594
// Name: SimpleLoadingModal
// Dependencies: [4993, 7594, 1984, 2]
// Exports: showSimpleLoadingModal

// Module 7593 (SimpleLoadingModal)
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4993 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const result = size.fileFinishedImporting("modules/mobile_web_handoff/native/SimpleLoadingModal.tsx");

export const showSimpleLoadingModal = function showSimpleLoadingModal(c3, arg1) {
  _require = c3;
  importDefault = arg1;
  const obj = ModalActionCreatorsDefault;
  const obj2 = {};
  const merged = Object.assign(arg1);
  obj2.onDismissed = function onDismissed() {
    ModalActionCreatorsDefault.popWithKey(closure_0);
    onDismissed = onDismissed.onDismissed;
    if (onDismissed != null) {
      onDismissed();
    }
  };
  obj.pushLazy(require("asyncRequireImpl")(7594, dependencyMap.paths), obj2, c3, { animation: "none" });
};
