// Module ID: 5689
// Function ID: 48978
// Name: showSimpleLoadingModal
// Dependencies: []
// Exports: showSimpleLoadingModal

// Module 5689 (showSimpleLoadingModal)
const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("modules/mobile_web_handoff/native/SimpleLoadingModal.tsx");

export const showSimpleLoadingModal = function showSimpleLoadingModal(closure_8, arg1) {
  const require = closure_8;
  const importDefault = arg1;
  let obj = importDefault(dependencyMap[0]);
  obj = {};
  const merged = Object.assign(arg1);
  obj["onDismissed"] = function onDismissed() {
    arg1(closure_2[0]).popWithKey(arg0);
    if (null != arg1.onDismissed) {
      arg1.onDismissed();
    }
  };
  obj = { animation: "none" };
  obj.pushLazy(require(dependencyMap[2])(dependencyMap[1], dependencyMap.paths), obj, closure_8, obj);
};
