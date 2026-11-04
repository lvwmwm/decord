// Module ID: 18543
// Function ID: 18544
// Name: NativeICYMIUtils
// Dependencies: [6744, 18544, 1994, 18545, 2]
// Exports: pushICYMIInfoModal

// Module 18543 (NativeICYMIUtils)
import asyncRequire from "asyncRequire" /* 1994 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6744 */;
import ICYMIInfoModalTypes from "ICYMIInfoModalTypes" /* 18545 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/icymi/native/NativeICYMIUtils.tsx");

export function pushICYMIInfoModal(arg0) {
  let extendedOnboarding;
  let skipIntro;
  ({ extendedOnboarding, skipIntro } = arg0);
  const pushLazy = ModalActionCreatorsDefault.pushLazy;
  ModalActionCreatorsDefault;
  const obj = { extendedOnboarding, skipIntro };
  const tmp2 = asyncRequire(18544, dependencyMap.paths);
  pushLazy(tmp2, obj, ICYMIInfoModalTypes.ICYMI_INFO_MODAL_KEY, { presentation: "fullScreenModal" });
}
