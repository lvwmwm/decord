// Module ID: 15455
// Function ID: 15456
// Name: pushICYMIInfoModal
// Dependencies: [4490, 15456, 1959, 15457, 2]
// Exports: pushICYMIInfoModal

// Module 15455 (pushICYMIInfoModal)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/icymi/native/NativeICYMIUtils.tsx");

export const pushICYMIInfoModal = function pushICYMIInfoModal(arg0) {
  let extendedOnboarding;
  let skipIntro;
  ({ extendedOnboarding, skipIntro } = arg0);
  let obj = importDefault(4490);
  obj = { extendedOnboarding, skipIntro };
  obj.pushLazy(require(1959) /* asyncRequireImpl */(15456, dependencyMap.paths), obj, require(15457) /* ICYMI_INFO_MODAL_KEY */.ICYMI_INFO_MODAL_KEY, { presentation: "fullScreenModal" });
};
