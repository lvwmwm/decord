// Module ID: 16804
// Function ID: 16805
// Name: NativeICYMIUtils
// Dependencies: [4959, 16805, 1980, 16806, 2]
// Exports: pushICYMIInfoModal

// Module 16804 (NativeICYMIUtils)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4959 */;
import ICYMIInfoModalTypes from "ICYMIInfoModalTypes" /* 16806 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/icymi/native/NativeICYMIUtils.tsx");

export const pushICYMIInfoModal = function pushICYMIInfoModal(arg0) {
  ({ extendedOnboarding, skipIntro } = arg0);
  const obj = ModalActionCreatorsDefault;
  obj.pushLazy(asyncRequireImpl(16805, dependencyMap.paths), { extendedOnboarding, skipIntro }, ICYMIInfoModalTypes.ICYMI_INFO_MODAL_KEY, { presentation: "fullScreenModal" });
};
