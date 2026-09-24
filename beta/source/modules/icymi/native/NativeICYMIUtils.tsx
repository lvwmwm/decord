// Module ID: 16818
// Function ID: 16819
// Name: NativeICYMIUtils
// Dependencies: [4993, 16819, 1984, 16820, 2]
// Exports: pushICYMIInfoModal

// Module 16818 (NativeICYMIUtils)
import asyncRequireImpl from "asyncRequireImpl" /* 1984 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4993 */;
import ICYMIInfoModalTypes from "ICYMIInfoModalTypes" /* 16820 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/icymi/native/NativeICYMIUtils.tsx");

export const pushICYMIInfoModal = function pushICYMIInfoModal(arg0) {
  ({ extendedOnboarding, skipIntro } = arg0);
  const obj = ModalActionCreatorsDefault;
  obj.pushLazy(asyncRequireImpl(16819, dependencyMap.paths), { extendedOnboarding, skipIntro }, ICYMIInfoModalTypes.ICYMI_INFO_MODAL_KEY, { presentation: "fullScreenModal" });
};
