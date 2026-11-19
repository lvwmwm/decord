// Module ID: 18151
// Function ID: 18152
// Name: NativeICYMIUtils
// Dependencies: [6308, 18152, 2121, 18153, 2]
// Exports: pushICYMIInfoModal

// Module 18151 (NativeICYMIUtils)
import asyncRequire from "asyncRequire" /* 2121 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6308 */;
import ICYMIInfoModalTypes from "ICYMIInfoModalTypes" /* 18153 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/icymi/native/NativeICYMIUtils.tsx");

export function pushICYMIInfoModal(arg0) {
  let extendedOnboarding;
  let skipIntro;
  ({ extendedOnboarding, skipIntro } = arg0);
  const pushLazy = ModalActionCreatorsDefault.pushLazy;
  ModalActionCreatorsDefault;
  const obj = { extendedOnboarding, skipIntro };
  const tmp2 = asyncRequire(18152, dependencyMap.paths);
  pushLazy(tmp2, obj, ICYMIInfoModalTypes.ICYMI_INFO_MODAL_KEY, { presentation: "fullScreenModal" });
}
