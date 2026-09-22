// Module ID: 16816
// Function ID: 16817
// Name: NativeICYMIUtils
// Dependencies: [4960, 16817, 1980, 16818, 2]
// Exports: pushICYMIInfoModal

// Module 16816 (NativeICYMIUtils)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4960 */;
import ICYMIInfoModalTypes from "ICYMIInfoModalTypes" /* 16818 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/icymi/native/NativeICYMIUtils.tsx");

export const pushICYMIInfoModal = function pushICYMIInfoModal(arg0) {
  ({ extendedOnboarding, skipIntro } = arg0);
  const obj = ModalActionCreatorsDefault;
  obj.pushLazy(asyncRequireImpl(16817, dependencyMap.paths), { extendedOnboarding, skipIntro }, ICYMIInfoModalTypes.ICYMI_INFO_MODAL_KEY, { presentation: "fullScreenModal" });
};
