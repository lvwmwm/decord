// Module ID: 15239
// Function ID: 115969
// Name: pushICYMIInfoModal
// Dependencies: [4337, 15240, 1934, 15241, 2]
// Exports: pushICYMIInfoModal

// Module 15239 (pushICYMIInfoModal)
const result = require("maybeLoadBundle").fileFinishedImporting("modules/icymi/native/NativeICYMIUtils.tsx");

export const pushICYMIInfoModal = function pushICYMIInfoModal(arg0) {
  let extendedOnboarding;
  let skipIntro;
  ({ extendedOnboarding, skipIntro } = arg0);
  let obj = importDefault(4337);
  obj = { extendedOnboarding, skipIntro };
  obj = { presentation: "fullScreenModal" };
  obj.pushLazy(require(1934) /* maybeLoadBundle */(15240, dependencyMap.paths), obj, require(15241) /* ICYMI_INFO_MODAL_KEY */.ICYMI_INFO_MODAL_KEY, obj);
};
