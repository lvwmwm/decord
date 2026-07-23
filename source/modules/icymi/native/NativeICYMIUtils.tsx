// Module ID: 15192
// Function ID: 115647
// Name: pushICYMIInfoModal
// Dependencies: [4337, 15193, 1934, 15194, 2]
// Exports: pushICYMIInfoModal

// Module 15192 (pushICYMIInfoModal)
const result = require("maybeLoadBundle").fileFinishedImporting("modules/icymi/native/NativeICYMIUtils.tsx");

export const pushICYMIInfoModal = function pushICYMIInfoModal(arg0) {
  let extendedOnboarding;
  let skipIntro;
  ({ extendedOnboarding, skipIntro } = arg0);
  let obj = importDefault(4337);
  obj = { extendedOnboarding, skipIntro };
  obj = { presentation: "fullScreenModal" };
  obj.pushLazy(require(1934) /* maybeLoadBundle */(15193, dependencyMap.paths), obj, require(15194) /* ICYMI_INFO_MODAL_KEY */.ICYMI_INFO_MODAL_KEY, obj);
};
