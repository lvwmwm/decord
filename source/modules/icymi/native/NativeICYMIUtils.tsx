// Module ID: 16465
// Function ID: 16466
// Name: pushICYMIInfoModal
// Dependencies: [4763, 16466, 1896, 16467, 2]
// Exports: pushICYMIInfoModal

// Module 16465 (pushICYMIInfoModal)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import _modDef4763 from "module_4763" /* 4763 */;
import ICYMI_INFO_MODAL_KEY from "ICYMI_INFO_MODAL_KEY" /* 16467 */;

const result = set.fileFinishedImporting("modules/icymi/native/NativeICYMIUtils.tsx");

export const pushICYMIInfoModal = function pushICYMIInfoModal(arg0) {
  ({ extendedOnboarding, skipIntro } = arg0);
  let obj = _modDef4763;
  obj = { extendedOnboarding, skipIntro };
  obj.pushLazy(asyncRequireImpl(16466, dependencyMap.paths), obj, ICYMI_INFO_MODAL_KEY.ICYMI_INFO_MODAL_KEY, { presentation: "fullScreenModal" });
};
