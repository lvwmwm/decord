// Module ID: 16104
// Function ID: 16105
// Name: NativeICYMIUtils
// Dependencies: [5039, 16105, 1981, 16106, 2]
// Exports: pushICYMIInfoModal

// Module 16104 (NativeICYMIUtils)
import asyncRequire from "asyncRequire" /* 1981 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5039 */;
import ICYMIInfoModalTypes from "ICYMIInfoModalTypes" /* 16106 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/icymi/native/NativeICYMIUtils.tsx");

export const pushICYMIInfoModal = function pushICYMIInfoModal(arg0) {
  let extendedOnboarding;
  let skipIntro;
  ({ extendedOnboarding, skipIntro } = arg0);
  const pushLazy = ModalActionCreatorsDefault.pushLazy;
  ModalActionCreatorsDefault;
  const obj = { extendedOnboarding, skipIntro };
  const tmp2 = asyncRequire(16105, dependencyMap.paths);
  pushLazy(tmp2, obj, ICYMIInfoModalTypes.ICYMI_INFO_MODAL_KEY, { presentation: "fullScreenModal" });
};
