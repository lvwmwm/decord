// Module ID: 7255
// Function ID: 7256
// Name: showSimpleLoadingModal
// Dependencies: [4731, 7256, 2008, 2]
// Exports: showSimpleLoadingModal

// Module 7255 (showSimpleLoadingModal)
import set from "set" /* 2 */;
import _modDef4731 from "module_4731" /* 4731 */;

const result = set.fileFinishedImporting("modules/mobile_web_handoff/native/SimpleLoadingModal.tsx");

export const showSimpleLoadingModal = function showSimpleLoadingModal(c3, arg1) {
  const _require = c3;
  importDefault = arg1;
  let obj = _modDef4731;
  obj = {};
  const merged = Object.assign(arg1);
  obj.onDismissed = function onDismissed() {
    lib(closure_1_2[0]).popWithKey(closure_0);
    const onDismissed = lib.onDismissed;
    if (onDismissed != null) {
      onDismissed();
    }
  };
  obj.pushLazy(_require(2008)(7256, dependencyMap.paths), obj, c3, { animation: "none" });
};
