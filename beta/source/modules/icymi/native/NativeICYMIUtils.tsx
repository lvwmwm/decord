// Module ID: 16808
// Function ID: 16809
// Name: NativeICYMIUtils
// Dependencies: [4961, 16809, 1984, 16810, 2]
// Exports: pushICYMIInfoModal

// Module 16808 (NativeICYMIUtils)
import asyncRequireImpl from "asyncRequireImpl" /* 1984 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4961 */;
import ICYMIInfoModalTypes from "ICYMIInfoModalTypes" /* 16810 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/icymi/native/NativeICYMIUtils.tsx");

export const pushICYMIInfoModal = function pushICYMIInfoModal(arg0) {
  ({ extendedOnboarding, skipIntro } = arg0);
  const obj = ModalActionCreatorsDefault;
  obj.pushLazy(asyncRequireImpl(16809, dependencyMap.paths), { extendedOnboarding, skipIntro }, ICYMIInfoModalTypes.ICYMI_INFO_MODAL_KEY, { presentation: "fullScreenModal" });
};
