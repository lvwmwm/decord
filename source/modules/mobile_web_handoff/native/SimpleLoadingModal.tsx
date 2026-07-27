// Module ID: 11751
// Function ID: 91284
// Name: showSimpleLoadingModal
// Dependencies: [4338, 11752, 1935, 2]
// Exports: showSimpleLoadingModal

// Module 11751 (showSimpleLoadingModal)
const result = require("maybeLoadBundle").fileFinishedImporting("modules/mobile_web_handoff/native/SimpleLoadingModal.tsx");

export const showSimpleLoadingModal = function showSimpleLoadingModal(outer1_8, arg1) {
  const _require = outer1_8;
  const importDefault = arg1;
  let obj = importDefault(4338);
  obj = {};
  const merged = Object.assign(arg1);
  obj["onDismissed"] = function onDismissed() {
    lib(outer1_2[0]).popWithKey(closure_0);
    if (null != lib.onDismissed) {
      lib.onDismissed();
    }
  };
  obj = { animation: "none" };
  obj.pushLazy(_require(1935)(11752, dependencyMap.paths), obj, outer1_8, obj);
};
