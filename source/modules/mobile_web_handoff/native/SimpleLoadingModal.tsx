// Module ID: 5973
// Function ID: 5974
// Name: showSimpleLoadingModal
// Dependencies: [4549, 5974, 2007, 2]
// Exports: showSimpleLoadingModal

// Module 5973 (showSimpleLoadingModal)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/mobile_web_handoff/native/SimpleLoadingModal.tsx");

export const showSimpleLoadingModal = function showSimpleLoadingModal(closure_4, arg1) {
  const _require = closure_4;
  const importDefault = arg1;
  let obj = importDefault(4549);
  obj = {};
  const merged = Object.assign(arg1);
  obj.onDismissed = function onDismissed() {
    lib(outer1_2[0]).popWithKey(closure_0);
    const onDismissed = lib.onDismissed;
    if (onDismissed != null) {
      onDismissed();
    }
  };
  obj.pushLazy(_require(2007)(5974, dependencyMap.paths), obj, closure_4, { animation: "none" });
};
