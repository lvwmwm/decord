// Module ID: 10497
// Function ID: 10498
// Name: useModalDismissGuardRefreshControl
// Dependencies: [19, 17, 21, 558, 568, 10498, 1368, 2]

// Module 10497 (useModalDismissGuardRefreshControl)
import c from "c" /* 568 */;
import PortalKeyboardModalContext from "PortalKeyboardModalContext" /* 10498 */;
import noop_mod from "module_19" /* 19 */;

const PlatformUtils = tmp(1368);
require = fn;
function noop() {

}
let noop = noop_mod;
const RefreshControl = fn(17).RefreshControl;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/keyboard/native/useModalDismissGuardRefreshControl.tsx");

export const useModalDismissGuardRefreshControl = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(2);
  const isPortalKeyboardInModal = PortalKeyboardModalContext.useIsPortalKeyboardInModal();
  if (cResult[0] !== isPortalKeyboardInModal) {
    let tmp6;
    if (isPortalKeyboardInModal) {
      if (tmpResult.isIOS()) {
        const obj3 = { refreshing: false, onRefresh: noop, tintColor: "transparent" };
        tmp6 = <RefreshControl refreshing={false} onRefresh={noop} tintColor="transparent" />;
      }
      tmpResult = PlatformUtils;
    }
    cResult[0] = isPortalKeyboardInModal;
    cResult[1] = tmp6;
    let tmp5 = tmp6;
  } else {
    tmp5 = cResult[1];
  }
  return tmp5;
}) : (() => {
  isPortalKeyboardInModal = isPortalKeyboardInModal(10498).useIsPortalKeyboardInModal();
  const items = [isPortalKeyboardInModal];
  return noop.useMemo(() => {
    let tmp;
    if (isPortalKeyboardInModal) {
      if (obj.isIOS()) {
        const obj2 = { refreshing: false, onRefresh: noop, tintColor: "transparent" };
        tmp = <RefreshControl refreshing={false} onRefresh={noop} tintColor="transparent" />;
      }
      obj = PlatformUtils;
    }
    return tmp;
  }, items);
});
