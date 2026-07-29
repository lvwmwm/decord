// Module ID: 15335
// Function ID: 15336
// Name: pushICYMIInfoModal
// Dependencies: [4395, 15336, 1959, 15337, 2]
// Exports: pushICYMIInfoModal

// Module 15335 (pushICYMIInfoModal)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/icymi/native/NativeICYMIUtils.tsx");

export const pushICYMIInfoModal = function pushICYMIInfoModal(arg0) {
  let extendedOnboarding;
  let skipIntro;
  ({ extendedOnboarding, skipIntro } = arg0);
  let obj = importDefault(4395);
  obj = { extendedOnboarding, skipIntro };
  obj.pushLazy(require(1959) /* asyncRequireImpl */(15336, dependencyMap.paths), obj, require(15337) /* ICYMI_INFO_MODAL_KEY */.ICYMI_INFO_MODAL_KEY, { presentation: "fullScreenModal" });
};
