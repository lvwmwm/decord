// Module ID: 16709
// Function ID: 16710
// Name: NativeICYMIUtils
// Dependencies: [5940, 16710, 1999, 16711, 2]
// Exports: pushICYMIInfoModal

// Module 16709 (NativeICYMIUtils)
import asyncRequire from "asyncRequire" /* 1999 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5940 */;
import ICYMIInfoModalTypes from "ICYMIInfoModalTypes" /* 16711 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/icymi/native/NativeICYMIUtils.tsx");

export const pushICYMIInfoModal = function pushICYMIInfoModal(arg0) {
  let extendedOnboarding;
  let skipIntro;
  ({ extendedOnboarding, skipIntro } = arg0);
  const pushLazy = ModalActionCreatorsDefault.pushLazy;
  ModalActionCreatorsDefault;
  const obj = { extendedOnboarding, skipIntro };
  const tmp2 = asyncRequire(16710, dependencyMap.paths);
  pushLazy(tmp2, obj, ICYMIInfoModalTypes.ICYMI_INFO_MODAL_KEY, { presentation: "fullScreenModal" });
};
