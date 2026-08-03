// Module ID: 15424
// Function ID: 15425
// Name: pushICYMIInfoModal
// Dependencies: [4461, 15425, 1959, 15426, 2]
// Exports: pushICYMIInfoModal

// Module 15424 (pushICYMIInfoModal)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/icymi/native/NativeICYMIUtils.tsx");

export const pushICYMIInfoModal = function pushICYMIInfoModal(arg0) {
  let extendedOnboarding;
  let skipIntro;
  ({ extendedOnboarding, skipIntro } = arg0);
  let obj = importDefault(4461);
  obj = { extendedOnboarding, skipIntro };
  obj.pushLazy(require(1959) /* asyncRequireImpl */(15425, dependencyMap.paths), obj, require(15426) /* ICYMI_INFO_MODAL_KEY */.ICYMI_INFO_MODAL_KEY, { presentation: "fullScreenModal" });
};
