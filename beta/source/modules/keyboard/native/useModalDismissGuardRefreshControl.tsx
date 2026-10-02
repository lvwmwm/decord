// Module ID: 9698
// Function ID: 9699
// Name: useModalDismissGuardRefreshControl
// Dependencies: [19, 17, 21, 558, 576, 9699, 1370, 2]

// Module 9698 (useModalDismissGuardRefreshControl)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import PortalKeyboardModalContext from "PortalKeyboardModalContext" /* 9699 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tmp;
const PlatformUtils = tmp(1370);
function noop() {

}
const RefreshControl = react_native.RefreshControl;
const jsx = Fragment.jsx;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let tmp5;
  const obj = react2;
  const cResult = obj.c(2);
  const obj2 = PortalKeyboardModalContext;
  const isPortalKeyboardInModal = obj2.useIsPortalKeyboardInModal();
  if (cResult[0] !== isPortalKeyboardInModal) {
    let tmp6;
    if (isPortalKeyboardInModal) {
      const tmpResult = PlatformUtils;
      if (tmpResult.isIOS()) {
        tmp6 = <RefreshControl refreshing={false} onRefresh={noop} tintColor="transparent" />;
      }
    }
    cResult[0] = isPortalKeyboardInModal;
    cResult[1] = tmp6;
    tmp5 = tmp6;
  } else {
    tmp5 = cResult[1];
  }
  return tmp5;
}) : (() => {
  let isPortalKeyboardInModal;
  let obj = isPortalKeyboardInModal(9699);
  isPortalKeyboardInModal = obj.useIsPortalKeyboardInModal();
  const items = [isPortalKeyboardInModal];
  return react.useMemo(() => {
    let tmp;
    if (isPortalKeyboardInModal) {
      const obj = PlatformUtils;
      if (obj.isIOS()) {
        tmp = <RefreshControl refreshing={false} onRefresh={noop} tintColor="transparent" />;
      }
    }
    return tmp;
  }, items);
});
const result = size.fileFinishedImporting("modules/keyboard/native/useModalDismissGuardRefreshControl.tsx");

export const useModalDismissGuardRefreshControl = tmp2;
