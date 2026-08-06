// Module ID: 15473
// Function ID: 15474
// Name: pushICYMIInfoModal
// Dependencies: [4490, 15474, 1988, 15475, 2]
// Exports: pushICYMIInfoModal

// Module 15473 (pushICYMIInfoModal)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/icymi/native/NativeICYMIUtils.tsx");

export const pushICYMIInfoModal = function pushICYMIInfoModal(arg0) {
  let extendedOnboarding;
  let skipIntro;
  ({ extendedOnboarding, skipIntro } = arg0);
  let obj = importDefault(4490);
  obj = { extendedOnboarding, skipIntro };
  obj.pushLazy(require(1988) /* asyncRequireImpl */(15474, dependencyMap.paths), obj, require(15475) /* ICYMI_INFO_MODAL_KEY */.ICYMI_INFO_MODAL_KEY, { presentation: "fullScreenModal" });
};
