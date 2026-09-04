// Module ID: 16389
// Function ID: 16390
// Name: pushICYMIInfoModal
// Dependencies: [4731, 16390, 2008, 16391, 2]
// Exports: pushICYMIInfoModal

// Module 16389 (pushICYMIInfoModal)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2008 */;
import _modDef4731 from "module_4731" /* 4731 */;
import ICYMI_INFO_MODAL_KEY from "ICYMI_INFO_MODAL_KEY" /* 16391 */;

const result = set.fileFinishedImporting("modules/icymi/native/NativeICYMIUtils.tsx");

export const pushICYMIInfoModal = function pushICYMIInfoModal(arg0) {
  ({ extendedOnboarding, skipIntro } = arg0);
  let obj = _modDef4731;
  obj = { extendedOnboarding, skipIntro };
  obj.pushLazy(asyncRequireImpl(16390, dependencyMap.paths), obj, ICYMI_INFO_MODAL_KEY.ICYMI_INFO_MODAL_KEY, { presentation: "fullScreenModal" });
};
