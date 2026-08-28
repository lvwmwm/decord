// Module ID: 15984
// Function ID: 15985
// Name: pushICYMIInfoModal
// Dependencies: [4689, 15985, 2010, 15986, 2]
// Exports: pushICYMIInfoModal

// Module 15984 (pushICYMIInfoModal)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2010 */;
import _modDef4689 from "module_4689" /* 4689 */;
import ICYMI_INFO_MODAL_KEY from "ICYMI_INFO_MODAL_KEY" /* 15986 */;

const result = set.fileFinishedImporting("modules/icymi/native/NativeICYMIUtils.tsx");

export const pushICYMIInfoModal = function pushICYMIInfoModal(arg0) {
  ({ extendedOnboarding, skipIntro } = arg0);
  let obj = _modDef4689;
  obj = { extendedOnboarding, skipIntro };
  obj.pushLazy(asyncRequireImpl(15985, dependencyMap.paths), obj, ICYMI_INFO_MODAL_KEY.ICYMI_INFO_MODAL_KEY, { presentation: "fullScreenModal" });
};
