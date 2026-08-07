// Module ID: 15497
// Function ID: 15498
// Name: pushICYMIInfoModal
// Dependencies: [4507, 15498, 1988, 15499, 2]
// Exports: pushICYMIInfoModal

// Module 15497 (pushICYMIInfoModal)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/icymi/native/NativeICYMIUtils.tsx");

export const pushICYMIInfoModal = function pushICYMIInfoModal(arg0) {
  let extendedOnboarding;
  let skipIntro;
  ({ extendedOnboarding, skipIntro } = arg0);
  let obj = importDefault(4507);
  obj = { extendedOnboarding, skipIntro };
  obj.pushLazy(require(1988) /* asyncRequireImpl */(15498, dependencyMap.paths), obj, require(15499) /* ICYMI_INFO_MODAL_KEY */.ICYMI_INFO_MODAL_KEY, { presentation: "fullScreenModal" });
};
