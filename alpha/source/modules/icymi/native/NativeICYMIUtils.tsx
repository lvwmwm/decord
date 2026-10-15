// Module ID: 17506
// Function ID: 17507
// Name: NativeICYMIUtils
// Dependencies: [6150, 17507, 2000, 17508, 2]
// Exports: pushICYMIInfoModal

// Module 17506 (NativeICYMIUtils)
import asyncRequire from "asyncRequire" /* 2000 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6150 */;
import ICYMIInfoModalTypes from "ICYMIInfoModalTypes" /* 17508 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/icymi/native/NativeICYMIUtils.tsx");

export const pushICYMIInfoModal = function pushICYMIInfoModal(arg0) {
  let extendedOnboarding;
  let skipIntro;
  ({ extendedOnboarding, skipIntro } = arg0);
  const pushLazy = ModalActionCreatorsDefault.pushLazy;
  ModalActionCreatorsDefault;
  const obj = { extendedOnboarding, skipIntro };
  const tmp2 = asyncRequire(17507, dependencyMap.paths);
  pushLazy(tmp2, obj, ICYMIInfoModalTypes.ICYMI_INFO_MODAL_KEY, { presentation: "fullScreenModal" });
};
