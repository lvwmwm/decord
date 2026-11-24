// Module ID: 9603
// Function ID: 9604
// Name: useModalDismissGuardRefreshControl
// Dependencies: [19, 17, 21, 9604, 1378, 2]
// Exports: useModalDismissGuardRefreshControl

// Module 9603 (useModalDismissGuardRefreshControl)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import PlatformUtils from "PlatformUtils" /* 1378 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

function noop() {

}
const RefreshControl = react_native.RefreshControl;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/keyboard/native/useModalDismissGuardRefreshControl.tsx");

export function useModalDismissGuardRefreshControl() {
  let isPortalKeyboardInModal;
  let obj = isPortalKeyboardInModal(9604);
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
}
