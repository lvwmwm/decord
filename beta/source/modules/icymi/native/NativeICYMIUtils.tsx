// Module ID: 16807
// Function ID: 16808
// Name: NativeICYMIUtils
// Dependencies: [4961, 16808, 1984, 16809, 2]
// Exports: pushICYMIInfoModal

// Module 16807 (NativeICYMIUtils)
import asyncRequireImpl from "asyncRequireImpl" /* 1984 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4961 */;
import ICYMIInfoModalTypes from "ICYMIInfoModalTypes" /* 16809 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/icymi/native/NativeICYMIUtils.tsx");

export const pushICYMIInfoModal = function pushICYMIInfoModal(arg0) {
  ({ extendedOnboarding, skipIntro } = arg0);
  const obj = ModalActionCreatorsDefault;
  obj.pushLazy(asyncRequireImpl(16808, dependencyMap.paths), { extendedOnboarding, skipIntro }, ICYMIInfoModalTypes.ICYMI_INFO_MODAL_KEY, { presentation: "fullScreenModal" });
};
