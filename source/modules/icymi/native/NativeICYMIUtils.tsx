// Module ID: 15249
// Function ID: 116097
// Name: pushICYMIInfoModal
// Dependencies: [4338, 15250, 1935, 15251, 2]
// Exports: pushICYMIInfoModal

// Module 15249 (pushICYMIInfoModal)
const result = require("maybeLoadBundle").fileFinishedImporting("modules/icymi/native/NativeICYMIUtils.tsx");

export const pushICYMIInfoModal = function pushICYMIInfoModal(arg0) {
  let extendedOnboarding;
  let skipIntro;
  ({ extendedOnboarding, skipIntro } = arg0);
  let obj = importDefault(4338);
  obj = { extendedOnboarding, skipIntro };
  obj = { presentation: "fullScreenModal" };
  obj.pushLazy(require(1935) /* maybeLoadBundle */(15250, dependencyMap.paths), obj, require(15251) /* ICYMI_INFO_MODAL_KEY */.ICYMI_INFO_MODAL_KEY, obj);
};
