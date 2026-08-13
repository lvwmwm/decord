// Module ID: 15653
// Function ID: 15654
// Name: pushICYMIInfoModal
// Dependencies: [4550, 15654, 2007, 15655, 2]
// Exports: pushICYMIInfoModal

// Module 15653 (pushICYMIInfoModal)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/icymi/native/NativeICYMIUtils.tsx");

export const pushICYMIInfoModal = function pushICYMIInfoModal(arg0) {
  let extendedOnboarding;
  let skipIntro;
  ({ extendedOnboarding, skipIntro } = arg0);
  let obj = importDefault(4550);
  obj = { extendedOnboarding, skipIntro };
  obj.pushLazy(require(2007) /* asyncRequireImpl */(15654, dependencyMap.paths), obj, require(15655) /* ICYMI_INFO_MODAL_KEY */.ICYMI_INFO_MODAL_KEY, { presentation: "fullScreenModal" });
};
