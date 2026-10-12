// Module ID: 16929
// Function ID: 16930
// Name: NativeICYMIUtils
// Dependencies: [5934, 16930, 2000, 16931, 2]
// Exports: pushICYMIInfoModal

// Module 16929 (NativeICYMIUtils)
import asyncRequire from "asyncRequire" /* 2000 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5934 */;
import ICYMIInfoModalTypes from "ICYMIInfoModalTypes" /* 16931 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/icymi/native/NativeICYMIUtils.tsx");

export const pushICYMIInfoModal = function pushICYMIInfoModal(arg0) {
  let extendedOnboarding;
  let skipIntro;
  ({ extendedOnboarding, skipIntro } = arg0);
  const pushLazy = ModalActionCreatorsDefault.pushLazy;
  ModalActionCreatorsDefault;
  const obj = { extendedOnboarding, skipIntro };
  const tmp2 = asyncRequire(16930, dependencyMap.paths);
  pushLazy(tmp2, obj, ICYMIInfoModalTypes.ICYMI_INFO_MODAL_KEY, { presentation: "fullScreenModal" });
};
