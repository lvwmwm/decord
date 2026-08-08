// Module ID: 15572
// Function ID: 15573
// Name: pushICYMIInfoModal
// Dependencies: [4509, 15573, 1988, 15574, 2]
// Exports: pushICYMIInfoModal

// Module 15572 (pushICYMIInfoModal)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/icymi/native/NativeICYMIUtils.tsx");

export const pushICYMIInfoModal = function pushICYMIInfoModal(arg0) {
  let extendedOnboarding;
  let skipIntro;
  ({ extendedOnboarding, skipIntro } = arg0);
  let obj = importDefault(4509);
  obj = { extendedOnboarding, skipIntro };
  obj.pushLazy(require(1988) /* asyncRequireImpl */(15573, dependencyMap.paths), obj, require(15574) /* ICYMI_INFO_MODAL_KEY */.ICYMI_INFO_MODAL_KEY, { presentation: "fullScreenModal" });
};
