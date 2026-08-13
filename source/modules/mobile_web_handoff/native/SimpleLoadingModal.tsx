// Module ID: 5975
// Function ID: 5976
// Name: showSimpleLoadingModal
// Dependencies: [4550, 5976, 2007, 2]
// Exports: showSimpleLoadingModal

// Module 5975 (showSimpleLoadingModal)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/mobile_web_handoff/native/SimpleLoadingModal.tsx");

export const showSimpleLoadingModal = function showSimpleLoadingModal(closure_4, arg1) {
  const _require = closure_4;
  const importDefault = arg1;
  let obj = importDefault(4550);
  obj = {};
  const merged = Object.assign(arg1);
  obj.onDismissed = function onDismissed() {
    lib(outer1_2[0]).popWithKey(closure_0);
    const onDismissed = lib.onDismissed;
    if (onDismissed != null) {
      onDismissed();
    }
  };
  obj.pushLazy(_require(2007)(5976, dependencyMap.paths), obj, closure_4, { animation: "none" });
};
