// Module ID: 15580
// Function ID: 15581
// Name: pushICYMIInfoModal
// Dependencies: [4509, 15581, 1988, 15582, 2]
// Exports: pushICYMIInfoModal

// Module 15580 (pushICYMIInfoModal)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/icymi/native/NativeICYMIUtils.tsx");

export const pushICYMIInfoModal = function pushICYMIInfoModal(arg0) {
  let extendedOnboarding;
  let skipIntro;
  ({ extendedOnboarding, skipIntro } = arg0);
  let obj = importDefault(4509);
  obj = { extendedOnboarding, skipIntro };
  obj.pushLazy(require(1988) /* asyncRequireImpl */(15581, dependencyMap.paths), obj, require(15582) /* ICYMI_INFO_MODAL_KEY */.ICYMI_INFO_MODAL_KEY, { presentation: "fullScreenModal" });
};
