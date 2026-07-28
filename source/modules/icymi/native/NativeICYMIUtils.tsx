// Module ID: 15302
// Function ID: 116305
// Name: pushICYMIInfoModal
// Dependencies: [4372, 15303, 1935, 15304, 2]
// Exports: pushICYMIInfoModal

// Module 15302 (pushICYMIInfoModal)
const result = require("maybeLoadBundle").fileFinishedImporting("modules/icymi/native/NativeICYMIUtils.tsx");

export const pushICYMIInfoModal = function pushICYMIInfoModal(arg0) {
  let extendedOnboarding;
  let skipIntro;
  ({ extendedOnboarding, skipIntro } = arg0);
  let obj = importDefault(4372);
  obj = { extendedOnboarding, skipIntro };
  obj = { presentation: "fullScreenModal" };
  obj.pushLazy(require(1935) /* maybeLoadBundle */(15303, dependencyMap.paths), obj, require(15304) /* ICYMI_INFO_MODAL_KEY */.ICYMI_INFO_MODAL_KEY, obj);
};
