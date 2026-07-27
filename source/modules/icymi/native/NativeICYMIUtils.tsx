// Module ID: 15262
// Function ID: 116146
// Name: pushICYMIInfoModal
// Dependencies: [4338, 15263, 1935, 15264, 2]
// Exports: pushICYMIInfoModal

// Module 15262 (pushICYMIInfoModal)
const result = require("maybeLoadBundle").fileFinishedImporting("modules/icymi/native/NativeICYMIUtils.tsx");

export const pushICYMIInfoModal = function pushICYMIInfoModal(arg0) {
  let extendedOnboarding;
  let skipIntro;
  ({ extendedOnboarding, skipIntro } = arg0);
  let obj = importDefault(4338);
  obj = { extendedOnboarding, skipIntro };
  obj = { presentation: "fullScreenModal" };
  obj.pushLazy(require(1935) /* maybeLoadBundle */(15263, dependencyMap.paths), obj, require(15264) /* ICYMI_INFO_MODAL_KEY */.ICYMI_INFO_MODAL_KEY, obj);
};
