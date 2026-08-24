// Module ID: 15790
// Function ID: 15791
// Name: pushICYMIInfoModal
// Dependencies: [5265, 15791, 2008, 15792, 2]
// Exports: pushICYMIInfoModal

// Module 15790 (pushICYMIInfoModal)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2008 */;
import _modDef5265 from "module_5265" /* 5265 */;
import ICYMI_INFO_MODAL_KEY from "ICYMI_INFO_MODAL_KEY" /* 15792 */;

const result = set.fileFinishedImporting("modules/icymi/native/NativeICYMIUtils.tsx");

export const pushICYMIInfoModal = function pushICYMIInfoModal(arg0) {
  ({ extendedOnboarding, skipIntro } = arg0);
  let obj = _modDef5265;
  obj = { extendedOnboarding, skipIntro };
  obj.pushLazy(asyncRequireImpl(15791, dependencyMap.paths), obj, ICYMI_INFO_MODAL_KEY.ICYMI_INFO_MODAL_KEY, { presentation: "fullScreenModal" });
};
