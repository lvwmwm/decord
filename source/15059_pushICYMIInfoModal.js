// Module ID: 15059
// Function ID: 113377
// Name: pushICYMIInfoModal
// Dependencies: []
// Exports: pushICYMIInfoModal

// Module 15059 (pushICYMIInfoModal)
const _module = require(dependencyMap[4]);
const result = _module.fileFinishedImporting("modules/icymi/native/NativeICYMIUtils.tsx");

export const pushICYMIInfoModal = function pushICYMIInfoModal(arg0) {
  let extendedOnboarding;
  let skipIntro;
  ({ extendedOnboarding, skipIntro } = arg0);
  let obj = importDefault(dependencyMap[0]);
  obj = { extendedOnboarding, skipIntro };
  obj = { presentation: "fullScreenModal" };
  obj.pushLazy(require(dependencyMap[2])(dependencyMap[1], dependencyMap.paths), obj, require(dependencyMap[3]).ICYMI_INFO_MODAL_KEY, obj);
};
