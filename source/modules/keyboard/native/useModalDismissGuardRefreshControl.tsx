// Module ID: 10321
// Function ID: 10322
// Name: noop
// Dependencies: [19, 17, 21, 10322, 1115, 2]
// Exports: useModalDismissGuardRefreshControl

// Module 10321 (noop)
import closure_2 from "noop" /* 19 */;
import { RefreshControl } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
function noop() {

}
const result = require("set").fileFinishedImporting("modules/keyboard/native/useModalDismissGuardRefreshControl.tsx");

export const useModalDismissGuardRefreshControl = function useModalDismissGuardRefreshControl() {
  isPortalKeyboardInModal = isPortalKeyboardInModal(10322).useIsPortalKeyboardInModal();
  const items = [isPortalKeyboardInModal];
  return React.useMemo(() => {
    let tmp;
    if (isPortalKeyboardInModal) {
      let obj = isPortalKeyboardInModal(closure_1_1[4]);
      if (obj.isIOS()) {
        obj = { refreshing: false, onRefresh: null, tintColor: "transparent" };
        obj[1] = closure_1_5;
        tmp = closure_1_4(closure_1_3, obj);
      }
    }
    return tmp;
  }, items);
};
