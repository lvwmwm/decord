// Module ID: 16405
// Function ID: 16406
// Name: NativeICYMIUtils
// Dependencies: [5093, 16406, 1987, 16407, 2]
// Exports: pushICYMIInfoModal

// Module 16405 (NativeICYMIUtils)
import asyncRequire from "asyncRequire" /* 1987 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5093 */;
import ICYMIInfoModalTypes from "ICYMIInfoModalTypes" /* 16407 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/icymi/native/NativeICYMIUtils.tsx");

export const pushICYMIInfoModal = function pushICYMIInfoModal(arg0) {
  let extendedOnboarding;
  let skipIntro;
  ({ extendedOnboarding, skipIntro } = arg0);
  const pushLazy = ModalActionCreatorsDefault.pushLazy;
  ModalActionCreatorsDefault;
  const obj = { extendedOnboarding, skipIntro };
  const tmp2 = asyncRequire(16406, dependencyMap.paths);
  pushLazy(tmp2, obj, ICYMIInfoModalTypes.ICYMI_INFO_MODAL_KEY, { presentation: "fullScreenModal" });
};
