// Module ID: 15671
// Function ID: 15672
// Name: pushICYMIInfoModal
// Dependencies: [4572, 15672, 2007, 15673, 2]
// Exports: pushICYMIInfoModal

// Module 15671 (pushICYMIInfoModal)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/icymi/native/NativeICYMIUtils.tsx");

export const pushICYMIInfoModal = function pushICYMIInfoModal(arg0) {
  let extendedOnboarding;
  let skipIntro;
  ({ extendedOnboarding, skipIntro } = arg0);
  let obj = importDefault(4572);
  obj = { extendedOnboarding, skipIntro };
  obj.pushLazy(require(2007) /* asyncRequireImpl */(15672, dependencyMap.paths), obj, require(15673) /* ICYMI_INFO_MODAL_KEY */.ICYMI_INFO_MODAL_KEY, { presentation: "fullScreenModal" });
};
