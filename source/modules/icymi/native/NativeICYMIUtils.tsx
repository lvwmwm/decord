// Module ID: 15597
// Function ID: 15598
// Name: pushICYMIInfoModal
// Dependencies: [4509, 15598, 2007, 15599, 2]
// Exports: pushICYMIInfoModal

// Module 15597 (pushICYMIInfoModal)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/icymi/native/NativeICYMIUtils.tsx");

export const pushICYMIInfoModal = function pushICYMIInfoModal(arg0) {
  let extendedOnboarding;
  let skipIntro;
  ({ extendedOnboarding, skipIntro } = arg0);
  let obj = importDefault(4509);
  obj = { extendedOnboarding, skipIntro };
  obj.pushLazy(require(2007) /* asyncRequireImpl */(15598, dependencyMap.paths), obj, require(15599) /* ICYMI_INFO_MODAL_KEY */.ICYMI_INFO_MODAL_KEY, { presentation: "fullScreenModal" });
};
