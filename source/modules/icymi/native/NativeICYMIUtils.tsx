// Module ID: 15721
// Function ID: 15722
// Name: pushICYMIInfoModal
// Dependencies: [5260, 15722, 2007, 15723, 2]
// Exports: pushICYMIInfoModal

// Module 15721 (pushICYMIInfoModal)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/icymi/native/NativeICYMIUtils.tsx");

export const pushICYMIInfoModal = function pushICYMIInfoModal(arg0) {
  let extendedOnboarding;
  let skipIntro;
  ({ extendedOnboarding, skipIntro } = arg0);
  let obj = importDefault(5260);
  obj = { extendedOnboarding, skipIntro };
  obj.pushLazy(require(2007) /* asyncRequireImpl */(15722, dependencyMap.paths), obj, require(15723) /* ICYMI_INFO_MODAL_KEY */.ICYMI_INFO_MODAL_KEY, { presentation: "fullScreenModal" });
};
