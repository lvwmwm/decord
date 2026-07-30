// Module ID: 15329
// Function ID: 15330
// Name: pushICYMIInfoModal
// Dependencies: [4395, 15330, 1959, 15331, 2]
// Exports: pushICYMIInfoModal

// Module 15329 (pushICYMIInfoModal)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/icymi/native/NativeICYMIUtils.tsx");

export const pushICYMIInfoModal = function pushICYMIInfoModal(arg0) {
  let extendedOnboarding;
  let skipIntro;
  ({ extendedOnboarding, skipIntro } = arg0);
  let obj = importDefault(4395);
  obj = { extendedOnboarding, skipIntro };
  obj.pushLazy(require(1959) /* asyncRequireImpl */(15330, dependencyMap.paths), obj, require(15331) /* ICYMI_INFO_MODAL_KEY */.ICYMI_INFO_MODAL_KEY, { presentation: "fullScreenModal" });
};
