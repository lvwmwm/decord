// Module ID: 19299
// Function ID: 19300
// Name: NativeICYMIUtils
// Dependencies: [6838, 19300, 2121, 19301, 2]
// Exports: pushICYMIInfoModal

// Module 19299 (NativeICYMIUtils)
import asyncRequire from "asyncRequire" /* 2121 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6838 */;
import ICYMIInfoModalTypes from "ICYMIInfoModalTypes" /* 19301 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/icymi/native/NativeICYMIUtils.tsx");

export function pushICYMIInfoModal(arg0) {
  let extendedOnboarding;
  let skipIntro;
  ({ extendedOnboarding, skipIntro } = arg0);
  const pushLazy = ModalActionCreatorsDefault.pushLazy;
  ModalActionCreatorsDefault;
  const obj = { extendedOnboarding, skipIntro };
  const tmp2 = asyncRequire(19300, dependencyMap.paths);
  pushLazy(tmp2, obj, ICYMIInfoModalTypes.ICYMI_INFO_MODAL_KEY, { presentation: "fullScreenModal" });
}
