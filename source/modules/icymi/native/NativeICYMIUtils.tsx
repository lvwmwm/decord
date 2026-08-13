// Module ID: 15662
// Function ID: 15663
// Name: pushICYMIInfoModal
// Dependencies: [4550, 15663, 2007, 15664, 2]
// Exports: pushICYMIInfoModal

// Module 15662 (pushICYMIInfoModal)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/icymi/native/NativeICYMIUtils.tsx");

export const pushICYMIInfoModal = function pushICYMIInfoModal(arg0) {
  let extendedOnboarding;
  let skipIntro;
  ({ extendedOnboarding, skipIntro } = arg0);
  let obj = importDefault(4550);
  obj = { extendedOnboarding, skipIntro };
  obj.pushLazy(require(2007) /* asyncRequireImpl */(15663, dependencyMap.paths), obj, require(15664) /* ICYMI_INFO_MODAL_KEY */.ICYMI_INFO_MODAL_KEY, { presentation: "fullScreenModal" });
};
